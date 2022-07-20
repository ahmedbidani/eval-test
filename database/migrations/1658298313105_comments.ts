import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comment extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('comment').notNullable
      table.integer('postId')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
