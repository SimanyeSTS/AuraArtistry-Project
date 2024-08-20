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
            if (err) throw new Error('Our apologies, a issue seems to have occured whe retrieving this user. Please try again later.')
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








}