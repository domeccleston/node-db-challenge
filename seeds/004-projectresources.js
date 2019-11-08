
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {project_name: "Finish full stack web curriculum", project_id: 1, resource_name: "Lambda School", resource_id: 1},
        {project_name: "Complete push day today", project_id: 2, resource_name: "The Gym", resource_id: 2}
      ]);
    });
};
