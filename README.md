# Java Coding Practice API

This is a Node.js and Express API designed to support the Java coding practice IDE application. It provides endpoints for executing Java code, facilitating seamless communication between the IDE frontend and the backend server.

## Features

- **Execution of Java Code**: Provides endpoints for executing Java code submitted by users.
- **Integration with Ace Editor**: Utilizes the `ace-builds` dependency for handling code execution and providing syntax highlighting and code editing features.
- **Middleware Integration**: Incorporates middleware packages such as `body-parser` and `cors` for parsing request bodies and enabling Cross-Origin Resource Sharing (CORS) support.
- **Secure Execution Environment**: Executes Java code in a secure environment using child processes, ensuring the safety and reliability of the application.

## Dependencies

- [ace-builds](https://www.npmjs.com/package/ace-builds): A comprehensive code editor for the web, providing syntax highlighting, code completion, and more for various programming languages.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing request bodies in Node.js, facilitating the handling of JSON, URL-encoded, and multipart-form data.
- [child_process](https://nodejs.org/api/child_process.html): A built-in Node.js module for spawning child processes, used here to execute Java code securely.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications, allowing for secure communication between frontend and backend servers.
- [express](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js, used for building the RESTful API endpoints.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Usage

  The API provides endpoints for executing Java code submitted by users from the Java coding practice IDE frontend.
  It ensures secure execution of Java code in a sandboxed environment, preventing unauthorized access to the server.
  Integration with middleware packages ensures efficient handling of requests and enables CORS support for seamless communication with the frontend.
