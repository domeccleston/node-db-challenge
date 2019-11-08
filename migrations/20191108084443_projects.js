exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("project_name", 128).notNullable();
      table.string("description", 128).notNullable();
      table.boolean("completed").defaultTo('false');
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("task_name", 128).notNullable();
      table.string("description", 128).notNullable();
      table.string("notes", 128);
      table.boolean("completed").defaultTo('false');
      table
        .integer("project_id", 128)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("resources", table => {
      table.increments();
      table.string("resource_name", 128).notNullable();
      table.string("description", 128).notNullable();
    })
    .createTable("contexts", table => {
      table.increments();
      table.string("context_name", 128).notNullable();
      table.string("description", 128).notNullable();
    })
    .createTable("project_resources", table => {
      table
        .string("project_name", 128)
        .notNullable()
        .references("project_name")
        .inTable("projects");
      table
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects");
      table
        .string("resource_name", 128)
        .notNullable()
        .references("resource_name")
        .inTable("resources");
      table
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources");
      table.primary(["project_id", "resource_id"]);
    })
    .createTable("task_contexts", table => {
      table
        .string("task_name", 128)
        .notNullable()
        .references("task_name")
        .inTable("tasks");
      table
        .integer("task_id")
        .unsigned()
        .references("id")
        .inTable("tasks");
      table
        .string("context_name", 128)
        .notNullable()
        .references("context_name")
        .inTable("contexts");
      table
        .integer("context_id")
        .unsigned()
        .references("id")
        .inTable("contexts");
      table.primary(["context_id", "task_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("task_contexts")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("contexts")
};
