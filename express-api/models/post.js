const db = require("../db_config/config");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await db.query(`SELECT * FROM posts;`);
        let posts = result.rows.map((r) => new Post(r));
        resolve(posts);
      } catch (err) {
        reject(`Error retrieving posts: ${err}`);
      }
    });
  }

  static create(title, pseudonym, body) {
    return new Promise(async (resolve, reject) => {
      try {
        await db.query(
          `INSERT INTO posts (title, pseudonym, body) VALUES ($1, $2, $3);`,
          [title, pseudonym, body]
        );
        let updatedPosts = Post.all;
        resolve(updatedPosts);
      } catch (err) {
        reject("Error creating post!");
      }
    });
  }
}

module.exports = Post;
