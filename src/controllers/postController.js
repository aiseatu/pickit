const postQueries = require("../db/queries.posts.js");

module.exports = {
  getAllPost(req, res, next){
    if(!req.user){
      res.redirect(500, "/");
    } else {
      postQueries.getAllPost((err, posts) => {
        if(err){
          res.redirect(500, "/");
        } else {
          res.send({posts});
        }
      });
    }
  },

  create(req, res, next){
    if(!req.user){
      res.redirect(500, "/posts");
    } else {
      console.log('got here');
      let newPost = {
        title: req.body.title,
        body: req.body.body,
        userId: req.user.id
      };
      postQueries.addPost(newPost, (err, post) => {
        if(err){
          res.redirect(500, "/posts");
        } else {
          res.send("post created");
        }
      })
    }
  }
}
