const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec, spawn } = require("child_process");
// const cors = require("cors");
const http = require("http");
const app = express();
console.log("asdasd");
// const corsOptions = {
//   origin: "https://coding-arena-production.up.railway.app/*",
//   methods: "POST",
//   allowedHeaders: "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
//   optionsSuccessStatus: 200,
// };
// app.use(cors());
app.use(express.json());
app.use(express.static(path.join("/", "public")));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://coding-arena-production.up.railway.app"); // Replace "*" with the specific origin you want to allow, or use "*" to allow any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify the HTTP methods allowed by your application
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Specify the headers allowed in the request
  res.header("Access-Control-Max-Age" ,"3600");
  next();
});
const server = http.createServer(app);

const tempDirectoryName = "home"; // Replace with your desired directory name
const tempDirectory = path.join("/", tempDirectoryName);
fs.mkdirSync(tempDirectory, { recursive: true });

app.post("/execute", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://coding-arena-production.up.railway.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify the HTTP methods allowed by your application
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Specify the headers allowed in the request
  res.header("Access-Control-Max-Age" ,"3600");
 
  const javaCode = req.body.code;
  const filePath = path.join(tempDirectory, "Code.java");
 

  // Create a temporary Java file and write the code to it
  fs.writeFileSync(filePath, javaCode);

  // Compile and execute the Java code
  exec(`javac ${filePath} && java ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    if (stderr) {
      res.status(500).json({ error: stderr });
      return;
    }
    console.log(stdout);
    let result = stdout === "supmaCsredoC";

    res
      .status(200)
      .json({ output: result ? `Congrats! => ${stdout}` : "Try Again!" });
  });
});




server.listen(3001, () => {
  console.log(`Server running on http://localhost:3001`);
});
