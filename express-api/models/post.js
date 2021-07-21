const db = require("../db_config/config");

class Post {
  constructor(data) {
    this.id = data.id;
    this.date = data.date;
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await db.query(`SELECT * FROM posts ORDER BY id DESC;`);
        let posts = result.rows.map((r) => new Post(r));
        resolve(posts);
      } catch (err) {
        reject(`Error retrieving posts: ${err}`);
      }
    });
  }

  static create(date, title, pseudonym, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const newPostData = await db.query(
          `INSERT INTO posts (date, title, pseudonym, body) VALUES ($1, $2, $3, $4) RETURNING *;`,
          [date, title, pseudonym, body]
        );
        const newPost = new Post(newPostData.rows[0]);
        resolve(newPost);
      } catch (err) {
        reject("Error creating post!");
      }
    });
  }
}

module.exports = Post;
