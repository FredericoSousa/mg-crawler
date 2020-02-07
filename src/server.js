const express = require("express");
const app = express();

app.use(express.json());

require("./routes")(app);

const { port = 3000 } = require("./config").app;
app.listen(port, console.log(`Server listen on port ${port}`));
