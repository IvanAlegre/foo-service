const express = require('express');
const app = express();

console.log(`Starting foo-service in environment ${process.env.NODE_ENV}`);

app.enable('trust proxy');

// All the controllers
app.use(require('./router'));

app.listen(3000, () => console.log('Listening on port 3000!'));
