const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;
const User = require("../../src/db/models").User;

describe("Post", () => {
  beforeEach((done) => {
    this.post;
    this.user;

    sequelize.sync({force: true}).then((res) => {
      User.create({
        email: "test@example.com",
        password: "123456"
      })
      .then((user) => {
        this.user = user;
        Post.create({
          title: "Dress",
          body: "For prom",
          userId: this.user.id
        })
        .then((post) => {
          this.post = post;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("#create()", () => {

    it("should create a post", (done) => {
      Post.create({
        title: "Shoes",
        body: "Also for prom",
        userId: this.user.id
      })
      .then((post) => {
        expect(post).not.toBeNull();
        expect(post.title).toBe("Shoes");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

  describe("#getUser()", () => {

    it("should return the associated user", (done) => {
      this.post.getUser()
      .then((associatedUser) => {
        expect(associatedUser.email).toBe("test@example.com");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });
});
