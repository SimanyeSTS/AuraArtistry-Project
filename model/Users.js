import { connection as db } from "../config/index.js";
import { createToken } from "../middleware/UserToken.js";
import { compare, hash } from "bcrypt";

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
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
        SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
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
        let data = req.body;
        
        // Hash the user's password
        data.userPass = await hash(data.userPass, 10);

        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        };

        const strQry = `
        INSERT INTO Users
        SET ?;
        `;

        db.query(strQry, [data], (err, results) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({
                        status: res.statusCode,
                        msg: "This email appears to already be registered. Please log in or choose a different email address."
                    })
                } else {
                    return res.status(500).json({
                        status: res.statusCode,
                        msg: "An error occurred during registration. Please try again."
                    })
                }
            } else {
                const token = createToken(user);
                return res.json({
                    token,
                    msg: "You have been successfully registered to use AuraArtistry. Please log in to continue."
                })
            }
        })
    } catch (e) {
        return res.status(404).json({
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
        db.query(strQry, [data], (err) => {
            if (err) throw new Error('Our apologies, it seems we ran into an issue updating the user\'s information. Please try again later.')
                res.json({
            status: res.statusCode,
        msg: "The information on this user has been successfully been updated."
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
async login(req, res) {
    try {
        const { emailAdd, userPass } = req.body
        const strQry = `
        SELECT UserID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(strQry, [emailAdd], async (err, result) => {
            if (err) throw new Error('Our apologies, we couldn\'t log you in. Please review your login query to continue.')
                if (!result?.length) {
                    res.json({
                        status: 401,
                        msg: "It seems you have provided an invalid email not registered with Aura Artistry. Please register."
                    })
                } else {
                    const ValidPass = await compare(userPass, result[0].userPass)
                    if (ValidPass) {
                        const token = createToken({
                            emailAdd,
                            userPass
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: "It seems you have provided an invalid password or have not registered with Aura Arstistry. Please try again."
                        })
                    }
                }
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
}
}

export {
    Users
}