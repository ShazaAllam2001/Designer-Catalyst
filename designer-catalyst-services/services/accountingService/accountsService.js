const mysql = require("mysql2");
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");

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

function checkEmailExists(db, email) {
    db.query('SELECT email FROM users_accounts WHERE email = ?', [email], async (error, result) => {
        if(error) {
            console.log(error)
        }
        else {
            if(result.length > 0) {
                console.log('This email is already in use')
            }
        }
    });
}

async function signUpUser(db, firstName, secondName, email, password) {
    checkEmailExists(db, email);

    let hashedPassword = await bcrypt.hash(password, 8);
    db.query('INSERT INTO user_accounts SET?', 
            {firstName: firstName, secondName: secondName, email: email, hashedPassword: hashedPassword}, 
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

function signInUser(db, email, password) {
    db.query(`SELECT hashedPassword FROM user_accounts WHERE email = ?`, [email], 
        (error, result) => {
            if(error) {
                console.log(error)
            } 
            else {
                console.log(result)
                var hashedPassword = result[0].hashedPassword
                bcrypt.compare(password, hashedPassword)
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    );
}

function changeFirstName(db, email, firstName) {
    db.query(`UPDATE user_accounts SET firstName = ? WHERE email = ?`, [firstName, email], 
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

function changeSecondName(db, email, secondName) {
    db.query(`UPDATE user_accounts SET secondName = ? WHERE email = ?`, [secondName, email], 
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

function changeJobDescription(db, email, jobDescription) {
    db.query(`UPDATE user_accounts SET jobDescription = ? WHERE email = ?`, [jobDescription, email], 
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

function changeEmail(db, email, newEmail) {
    db.query(`UPDATE user_accounts SET email = ? WHERE email = ?`, [newEmail, email], 
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

async function changePassword(db, email, password) {
    let hashedPassword = await bcrypt.hash(password, 8);
    db.query(`UPDATE user_accounts SET hashedPassword = ? WHERE email = ?`, [hashedPassword, email], 
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

/*db = connectToDB();
signUpUser(db, "Steve", "Holland", "SteveHolland@gmail.com", "123456789");
signUpUser(db, "Tom", "Smith", "TomSmith@gmail.com", "123456");*/

/*db = connectToDB();
console.log(signInUser(db, "SteveHolland@gmail.com", "123456789"));*/

/*db = connectToDB();
changeFirstName(db, "TomSmith@gmail.com", "Sam");*/