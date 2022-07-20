import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'
import Like from './Like'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public caption: string

  @column()
  public mediaPath: string

  @hasMany(() => Comment)
  public commentId: HasMany<typeof Comment>

  @hasMany(() => Like)
  public likeId: HasMany<typeof Like>
}
