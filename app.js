const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000; // You can use any port number

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy user data (in a real app, you'd fetch this from a database)
const users = [
  { email: "user@example.com", password: "password123" }, // Replace with hashed passwords in real apps
];

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid email or password." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
