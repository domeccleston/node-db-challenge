
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_name: 'Finish full stack web curriculum', description: 'level up skills', completed: false, project_id: 1},
        {id: 2, task_name: 'Complete push day today', description: 'get reps in', completed: true, project_id: 2},
      ]);
    });
};