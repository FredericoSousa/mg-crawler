const express = require('express');
const app = express();

app.use(express.json());

require('./routes')(app);

const { port = process.env.PORT } = require('./config').app;
app.listen(port || 3000, console.log(`Server listen on port ${port}`));
