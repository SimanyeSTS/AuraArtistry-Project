import { connection as db } from "../config/index.js";

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, quantity, amount, Category, prodDescription, prodURL
            FROM Products;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Our apologies, a issue seems to have occured when retrieving the products. Please try again later.')
                    res.json({
                status: res.statusCode,
                results
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchProduct(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, quantity, amount, Category, prodDescription, prodURL
            FROM Products
            WHERE prodID = ${req.params.id};    
            `
            db.query(strQry, (err, result) => {
                if (err) throw new Error('Our apologies, an issue seems to have occured whe retrieving this product. Please try again later.')
                    res.json({
                status: res.statusCode,
                result: result[0]
        })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    addProduct(req, res) {
        try {
            const strQry = `
            INSERT INTO Products
            SET ?
            `
        db.query(strQry, [req.body], (err) => {
            if (err) throw new Error('An unexpected error occured whilst adding the product. Please check again later.')
                res.json({
            status: res.statusCode,
            msg: "You have successfully added a product to the Aura Artistry website."
        })
        })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    updateProduct(req, res) {
        try {
            const strQry = `
            UPDATE Products
            SET ?
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Our apologies, it seems we ran into an issue updating the product\'s information. Please try again later.')
                    res.json({
                status: res.statusCode,
            msg: "The information on this product has been successfully been updated."})
            })
        } catch (e) {
            res.json({
                status: 404,
                    err: e.message
            })
        }
    }
    deleteProduct(req, res) {
        try {
            const strQry = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                res.json({
                    status: res.statusCode,
                    msg: "The information on this product has been successfully been removed."
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

export {
    Products
}