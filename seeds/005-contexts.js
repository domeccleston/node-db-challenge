
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context_name: 'at home', description: "chilling"},
      ]);
    });
};
