const logger = require('./logger');
const path = require('path');

let pathObject = path.parse(__filename);

//console.log(pathObject);

logger.log(pathObject);