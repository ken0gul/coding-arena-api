const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec, spawn } = require("child_process");
const cors = require("cors");

const app = express();
// app.use(cors());
app.configure(function() {
  app.use(cors({ origin: 'null', credentials: true }));
});

app.use(express.json());
app.use(express.static(path.join("/home/john/code-editor/temp", "public")));

const tempDirectoryName = "home"; // Replace with your desired directory name
const tempDirectory = path.join(
  "/home/john/code-editor/temp",
  tempDirectoryName
);
fs.mkdirSync(tempDirectory, { recursive: true });

app.post("/execute", (req, res) => {
  const javaCode = req.body.code;
  const filePath = path.join(tempDirectory, "Code.java");
  console.log(filePath);

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

  const javaProcess = spawn("java", [filePath]);

  javaProcess.stdout.on("data", (data) => {
    const output = data.toString().trim();
    // Process the output here if needed
    console.log(`Java code output: ${output}`);
  });

  javaProcess.stderr.on("data", (data) => {
    console.error(`Java code error: ${data}`);
  });

  javaProcess.on("close", (code) => {
    // `code` contains the exit code of the Java process
    console.log(`Java code exited with code ${code}`);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
