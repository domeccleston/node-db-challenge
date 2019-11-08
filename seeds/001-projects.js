exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Get a job', description: 'obtain paid employment', completed: 'false'},
        {id: 2, project_name: 'Bench 100kg', description: 'make gains', completed: 'false'},
      ]);
    });
};
