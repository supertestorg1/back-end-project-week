exports.up = (knex, Promise) => {
  return knex.schema.createTable('notes', (tbl) => {
    tbl.increments();
    tbl.string('title').notNullable();
    tbl.string('text');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('notes');
};