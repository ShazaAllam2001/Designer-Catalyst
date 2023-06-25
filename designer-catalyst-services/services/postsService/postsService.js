const mysql = require("mysql2");
const dotenv = require('dotenv');

function connectToDB() {
    dotenv.config();

    /*const db = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    });*/
    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "<NiceGuy>192",
        database: "designer_catalyst_accounts"
    });

    db.connect((error) => {
        if(error) {
            console.log(error)
        } else {
            console.log("MySQL connected!")
        }
    });

    return db;
}

function createPost(db, user_id, image_link, caption) {
    db.query('INSERT INTO user_posts SET?', 
        {user_id: user_id, image_link: image_link, caption: caption}, 
        (error, res) => {
            if(error) {
                console.log(error)
            } 
            else {
                console.log(res)
            }
        }
    );
}

function ratePost(db, post_id, rating) {
    db.query('SELECT post_id, rating, num_raters FROM post_rating WHERE post_id = ?', [post_id], async (error, result) => {
        if(error) {
            console.log(error)
        }
        else {
            if(result.length > 0) {
                console.log('This post is previuosly rated');

                new_rating = (result.rating * result.num_raters + rating) / (result.num_raters + 1);

                db.query(`UPDATE post_rating SET rating = ?, num_raters = ? WHERE post_id = ?`, [new_rating, num_raters+1, post_id], 
                    (error, result) => {
                        if(error) {
                            console.log(error)
                        } 
                        else {
                            console.log(result)
                        }
                    }
                );
            }
            else {
                console.log('First one to rate this post');

                db.query('INSERT INTO post_rating SET?', 
                    {post_id: post_id, rating: rating, num_raters: 1}, 
                        (error, res) => {
                            if(error) {
                                console.log(error)
                            } 
                            else {
                                console.log(res)
                            }
                        }
                );
            }
        }
    });
}

function commentPost(db, post_id, owner_id, content) {
    db.query('INSERT INTO post_comments SET?', 
        {post_id: post_id, owner_id: owner_id, content: content}, 
        (error, res) => {
            if(error) {
                console.log(error)
            } 
            else {
                console.log(res)
            }
        }
    );
}

db = connectToDB();
//createPost(db, 1, "https://fastly.picsum.photos/id/570/1024/768.jpg?hmac=J7Peq8uX0IP0xe5hpd0yP2QY8o7RehGcLKdIsRWR3dE", "test image");
ratePost(db, 1, 3.5);