const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec, spawn } = require("child_process");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "https://coding-arena-production.up.railway.app", // Replace with the allowed origin for the specific request
  methods: "POST", // Specify the allowed HTTP methods
};

app.use(express.json());
app.use(express.static(path.join("/home/john/code-editor/temp", "public")));

const tempDirectoryName = "home"; // Replace with your desired directory name
const tempDirectory = path.join(
  "/home/john/code-editor/temp",
  tempDirectoryName
);
fs.mkdirSync(tempDirectory, { recursive: true });

app.post("/execute", cors(corsOptions), (req, res) => {
  // Your existing code for executing Java code

  // Rest of your code
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
