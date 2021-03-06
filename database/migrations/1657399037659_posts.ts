import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.timestamps(true);
      table.string('last_name').notNullable;
      table.string('first_name').notNullable;
      table.string('caption').notNullable;
      table.string('media_path').nullable;
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
