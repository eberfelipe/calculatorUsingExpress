# Express Arithmetic API

This project is an Express-based web server that exposes simple arithmetic operations (addition, subtraction, multiplication, and division) via HTTP GET requests. It demonstrates the use of middleware for request preprocessing and global error handling within an Express application.

# Getting Started

To get started with this project, clone the repository to your local machine and install the dependencies using npm.

# Prerequisites

Node.js installed on your machine.
Basic understanding of JavaScript and Node.js.
Installation
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the required dependencies.
Usage
The server supports four operations: addition, subtraction, multiplication, and division. Each operation can be accessed through its respective route (/sum, /sub, /mul, /div) and requires two query parameters, a and b, which represent the operands.

# Examples

Addition: /sum?a=10&b=5 - This will add 10 and 5, returning 15.
Subtraction: /sub?a=10&b=5 - This will subtract 5 from 10, returning 5.
Multiplication: /mul?a=10&b=5 - This will multiply 10 by 5, returning 50.
Division: /div?a=10&b=5 - This will divide 10 by 5, returning 2.
Error Handling
The server includes global error handling for unexpected issues. If an error occurs, the server will respond with a 500 Internal Server Error status and a generic error message. For division, an attempt to divide by zero will result in a 400 Bad Request status with an appropriate error message.

# Development

This project is structured with the main server setup in one file and the arithmetic operation functions along with middleware defined in separate modules. This structure facilitates easy maintenance and scalability.

# Middleware

The middleware preprocesses the incoming requests to parse the a and b query parameters and attach them to the req object for use in the operation functions.

# Operation Functions

Each arithmetic operation is implemented as a separate function that reads the operands from the req object, performs the operation, and sends the result back to the client as a string.

# Contributing

Contributions to the project are welcome. Please ensure that your code adheres to the project's coding standards and include tests for new features or bug fixes.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
