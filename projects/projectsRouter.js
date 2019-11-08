const express = require('express');
const Projects = require('./projectsModel');

const projectsRouter = express.Router();

projectsRouter.get("/projects", async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
    } catch (error) {
        res.json(error)
    }
});

projectsRouter.get("/projects/:id", async (req, res) => {
    try {
        const projects = await Projects.getProjectsById(req.params.id);
        const tasks = await Projects.getProjectTasksByProjectId(req.params.id);
        const resources = await Projects.getResourcesByProjectId(req.params.id);
        res.json({
            projects,
            tasks,
            resources,
        });
    } catch (error) {
        res.json(error)
    }
});

module.exports = projectsRouter;