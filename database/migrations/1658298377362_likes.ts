import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Likes extends BaseSchema {
  protected tableName = 'likes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.boolean('like').notNullable
      table.integer('postId')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
