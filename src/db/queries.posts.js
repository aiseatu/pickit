const Post = require("./models").Post;

module.exports = {

  getAllPost(callback){
    return Post.all()
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
