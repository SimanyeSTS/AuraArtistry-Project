import { connection as db } from "../config";

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodImage, prodName, quantity, amount, Category, prodDescription, prodURL
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
            SELECT prodID, prodImage, prodName, quantity, amount, Category, prodDescription, prodURL
            FROM Products
            WHERE productID = ${req.params.id};    
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
        
    }




}