
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
  
        table.timestamps(true, true);
  
      }),

      knex.schema.createTable('favorites', (table) => {
        table.increments('id').primary()
        table.integer('movie_id')
        table.string('title').notNullable();
        table.text('poster_path').notNullable();
        table.text('release_date').notNullable();
        table.text('vote_average').notNullable();
        table.text('overview').notNullable();
        table.integer('user_id').unsigned()
        table.foreign('user_id')
          .references('users.id')

        table.timestamps(true, true) 
      })
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('users'),
      knex.schema.dropTable('favorites'),
    ]);
  };
