/*
** Filename: sophisticated_code.js
** Description: This code is a complex implementation of a web-based chat application with user authentication and real-time messaging.
*/

// Import required libraries and modules
const express = require("express");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Initialize the express app
const app = express();
app.use(bodyParser.json());

// Setup database connection
const db = require("database");

// Configure authentication middleware
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await db.getUserById(decoded.userId);
    if (!user) throw new Error("User not found");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Define routes
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Setup socket.io server
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const io = socketIO(server);

// Define socket.io events
io.use((socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = db.getUserById(decoded.userId);
    if (!user) throw new Error("User not found");

    socket.userId = user.id;
    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
});

io.on("connection", async (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.join("general");

  // Broadcast message to room
  socket.on("message", async (message) => {
    try {
      const user = await db.getUserById(socket.userId);
      if (!user) throw new Error("User not found");

      const newMessage = {
        text: message,
        user: user.name,
      };

      io.to("general").emit("message", newMessage);
    } catch (error) {
      console.log(error);
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});