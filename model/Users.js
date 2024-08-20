import { connection as db } from "../config/index";
import { createToken } from "../middleware/UserToken.js";
import { compare, hash } from "bcrypt";

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT firstName, lastName, userAge, Gender, emailAdd, userPass, userProfile
            FROM Users;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Our apologies, a issue seems to have occured when retrieving the users. Please try again later.')
                    res.json({
                status: res.statusCode,
                results
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: "Please try again later."
        })
    }
}
fetchUser(req, res) {
    try {
        const strQry = `
        SELECT firstName, lastName, userAge, Gender, emailAdd, userPass, userProfile
            FROM Users
            WHERE UserID = ${req.params.id};
        `
        db.query(strQry, (err, result) => {
            if (err) throw new Error('Our apologies, an issue seems to have occured whe retrieving this user. Please try again later.')
                res.json({
            status: res.statusCode,
        result: result[0]
    })
        })
    } catch  (e) { 
        res.json({
            status: 404,
            msg: "Please try again later."
        })
    }

}
async registerUser(req, res) {
    try {
        let data = req.body
        data.userPass = await hash(data.userPass, 10)

        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        const strQry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(strQry, [data], (err) => {
            if (err) {
                res.json({
                    status: res.statusCode,
                    msg: "This email appears to already be registered. Please log in or choose a different email address."
                })
            } else {
                const token = createToken(user)
                res.json({
                    token,
                    msg: "You have been successfully registered to use Aura Arstistry. Please log in to continue."
                })
            }
    })
} catch  (e) {
    res.json({
        status: 404,
        err: e.message
    })
}
}
async updateUser(req, res) {
    try {
        let data = req.body
        if (data.userPass) {
            data.userPass = await hash(data.userPass, 10)
        }
        const strQry = `
        UPDATE Users
        SET ?
        WHERE UserID = ${req.params.id}
        `
        db.query(strQry, (err, result) => {
            if (err) throw new Error('Our apologies, it seems we ran into an issue updating the user\'s information. Please try again later.')
                res.json({
            status: res.statusCode,
        msg: "The information on this user have successfully been updated."
    })
        })
    } catch (e) {
        res.json({
            status: 400,
            err: e.message
        })
    }
}
deleteUser(req, res) {
   try{
 const strQry = `
 DELETE FROM Users
 WHERE UserID = ${req.params.id};
  `
  db.query(strQry, (err) => {
    if (err) throw new Error('Our apologies, the user couldn\'t be deleted. Please review your delete query to continue.')
        res.json({
    status: res.statusCode,
    msg: "The user has successfully been deleted."
        })
  })
   } catch (e) {
    res.json({
        status: 404,
        err: e.message
    })
   }
}




}