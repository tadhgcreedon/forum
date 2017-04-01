const config = require(`./config/`), //App configuration
logger = require(`./utils/logger`), //Logging utility
middleware = require(`./middleware`), //functions to run on each request before sending a response
express = require(`express`), //Server-side web app framework
app = express(), //Tha app instance
mongoose = require(`mongoose`); //MongoDB ODM library

app.use(...middleware); 
app.get(`/`, (request, response) => { //base URL
    logger.logInfo(`base URL accessed`);
    response.send(`It works!!`);
});
const server = app.listen(config.server.port, () => { //start the app
    logger.logInfo(`app listening on port ${config.server.port}`);
});
