var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "quiz.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE quiz (
            quizId INTEGER PRIMARY KEY,
            quizQuestion TEXT,
            quizAnswer1 TEXT,
            quizAnswer2 TEXT,
            quizAnswer3 TEXT,
            quizCorrectAnswer INTEGER,
            quizImg TEXT

            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO quiz (quizQuestion, quizAnswer1, quizAnswer2, quizAnswer3, quizCorrectAnswer, quizImg) VALUES (?,?,?,?,?,?)'
                db.run(insert, ["Vilken världsdel visas?",
                    "Sydamerika",
                    "Asien",
                    "Afrika",
                    "3",
                    "280px-Africa_(orthographic_projection).svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Afrika",
                    "Asien",
                    "Nordamerika",
                    "2",
                    "280px-Asia_(orthographic_projection).svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Antarktis",
                    "Oceanien",
                    "Europa",
                    "3",
                    "280px-Europe_(orthographic_projection).svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Nordamerika",
                    "Antarktis",
                    "Oceanien",
                    "2",
                    "280px-Antarctica_(orthographic_projection).svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Sydamerika",
                    "Afrika",
                    "Nordamerika",
                    "3",
                    "280px-Location_North_America.svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Oceanien",
                    "Afrika",
                    "Antarktis",
                    "1",
                    "280px-Oceania_(orthographic_projection).svg.png"])
                db.run(insert, ["Vilken världsdel visas?",
                    "Sydamerika",
                    "Nordamerika",
                    "Europa",
                    "1",
                    "280px-South_America_(orthographic_projection).svg.png"])
            }
        })
        db.run(`CREATE TABLE users (
            userId INTEGER PRIMARY KEY,
            userRole TEXT,
            fullName TEXT,
            email TEXT,
            passWord TEXT,
            phoneNumber TEXT,
            level INTEGER
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                const insert = 'INSERT INTO users (userRole, fullName, email, passWord, phoneNumber, level) VALUES (?,?,?,?,?,?)';
                db.run(insert, ["student",
                    "Halim Halim",
                    "halim.halim@iths.se",
                    "123456",
                    "0722000000",
                    "4"])
            }
        })

    }
})

module.exports = db