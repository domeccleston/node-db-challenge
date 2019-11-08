
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_contexts').insert([
        {task_id: 1, task_name: 'Finish full stack web curriculum', context_id: 1, context_name: "at home"},
      ]);
    });
};
