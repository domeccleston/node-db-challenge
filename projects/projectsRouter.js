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

projectsRouter.get("/tasks", async (req, res) => {
    try {
        const tasks = await Projects.getTasks();
        res.json(tasks);
    } catch (error) {
        res.json(error)
    }
});

projectsRouter.get("/tasks/:id", async (req, res) => {
    try {
        const tasks = await Projects.getTasksById(req.params.id);
        const contexts = await Projects.getTaskContextsByTaskId();
        res.json({
            tasks
        });
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

projectsRouter.post("/projects", async (req, res) => {
    try {
        const project = await Projects.createProject(req.body);
        res.json({ message: "project created successfully", project: req.body})
    } catch (error) {
        res.json(error)
    }
})

projectsRouter.post("/tasks", async (req, res) => {
    try {
        const task = await Projects.createTask(req.body);
        res.json({ message: "task created successfully", task: req.body})
    } catch (error) {
        res.json(error)
    }
})

projectsRouter.put("/:entity/:id", async (req, res) => {
    try {
        const updatedEntity = await Projects.updateEntity(req.params.id, req.params.entity, req.body);
        res.json({ message: `${req.params.entity} successfully updated`, content: req.body})
    } catch (error) {
        res.json(error)
    }
})

projectsRouter.delete("/:entity/:id", async (req, res) => {
    try {
        const deletedEntity = await Projects.deleteEntity(req.params.id, req.params.entity);
        res.json({ message: `${req.params.entity} successfully deleted`, deleteCount: deletedEntity})
    } catch (error) {
        res.json(error)
    }
})


module.exports = projectsRouter;