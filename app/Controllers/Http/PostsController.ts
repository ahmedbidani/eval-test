import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import Like from 'App/Models/Like'
export default class PostsController {
  public async create({ request, view }: HttpContextContract) {
    const caption = request.input('caption')
    const files = request.file('files')
    const newPost = new Post()
    newPost.caption = caption
    newPost.lastName = request.input('lastname')
    newPost.firstName = request.input('firstname')
    if (files) {
      files.move(Application.publicPath('uploads')) //put files in tmp
      newPost.mediaPath = '/uploads/' + files.clientName
      Application.startPath()
    }
    /*     const comment = await newPost.related('commentId').create({
      comment: 'This is a great post',
    }) */
    await newPost.save()
    //return newPost.toJSON();
    const posts = await Post.all()
    return view.render('feedpost', { posts })
  }
  public async addComment({ request, view }: HttpContextContract) {
    const idPost = request.input('id')
    const comment = request.input('comments')

    const newComment = new Comment()
    newComment.postId = idPost
    newComment.comment = comment
    newComment.save()
    const posts = await Post.all()

    return view.render('feedpost', { posts })
  }

  public async addLike({ request, view }: HttpContextContract) {
    const idPost = request.input('id')
    const like = request.input('like')

    const newComment = new Like()
    newComment.postId = idPost
    newComment.liked = like
    newComment.save()
    const posts = await Post.all()

    return view.render('feedpost', { posts })
  }

  public async register({ view, request }: HttpContextContract) {
    const lastName = request.input('lastname')
    const firstName = request.input('firstname')

    return view.render('addpost', { firstname: firstName, lastname: lastName })
  }
}
