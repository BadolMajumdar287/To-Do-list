import { response } from "../lib/response.js";
import { userModel } from "../model/user.model.js";
import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    console.log(req.headers)
    try {
        const token = req.cookies['session'] || req.headers['authorization']
        if (!token) return response(res, 401, { error: "Invalid Token" });

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!verified) return response(res, 401, { error: "Session Expired" });

        const payload = jwt.decode(token, process.env.JWT_SECRET_KEY);

        const user = await userModel.findById(payload.data._id);
        if (!user) return response(res, 401, { error: "Unauthorized User" });


        req.user = user;
        next()
    } catch (error) {
        response(res, 500, { error: "[MW] Internal Server Error" });
    }
}