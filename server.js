const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projects/projectsRouter');
const server = express();

server.use(express.json())
server.use(helmet());
server.use("/api/", projectsRouter);

module.exports = server;