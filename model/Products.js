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
    





}