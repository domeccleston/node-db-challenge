const db = require('../data/dbconfig');

function getProjects() {
    return db('projects');
}

function getTasks() {
    return db('tasks');
}

function getTasksById(id) {
    return db('tasks').where({ id });
}

function getResourcesByProjectId(id) {
    return db('project_resources').where({ project_id: id});
}

function getProjectTasksByProjectId(id) {
    return db('tasks').where({ project_id: id});
}

function getProjectsById(id) {
    return db('projects').where({ id });
}

function createProject(newProject) {
    return db('projects').insert(newProject);
}

function createTask(newTask) {
    return db('tasks').insert(newTask);
}

function updateEntity(id, entity, content) {
    return db(`${entity}`).where({ id }).update(content);
}

function deleteEntity(id, entity) {
    return db(`${entity}`).where({ id }).del();
}


module.exports = {
    getProjects,
    getProjectsById,
    getTasks,
    getProjectTasksByProjectId,
    getResourcesByProjectId,
    createProject,
    createTask,
    updateEntity,
    deleteEntity,
}