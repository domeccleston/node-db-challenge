const db = require('../data/dbconfig');

function getProjects() {
    return db('projects');
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

module.exports = {
    getProjects,
    getProjectsById,
    getProjectTasksByProjectId,
    getResourcesByProjectId,
}