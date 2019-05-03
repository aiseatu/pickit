const postQueries = require("../src/db/queries.posts.js");

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
}
