const express = require("express");
const calc = require("./routes/calc");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/api/calc", calc);

// connection
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}`));
