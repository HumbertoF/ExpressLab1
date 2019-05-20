
const express = require("express");
const cartItems = require("./cartItems");
const app = express();

app.use(express.json());  
app.use("/", cartItems);

const port = 5000;

app.listen(port, () => console.log(`listening on port: http://localhost:${port}`));