import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async ( req, res, next ) =>
{
    if ( !req.headers.authorization )
    {
        return res.status( 401 ).json( {
            message: "Bạn chưa đăng nhập",
        } );
    }
    const token = req.headers.authorization.split( " " )[ 1 ];

    jwt.verify( token, "l0u9o0n7g", async ( err, decoded ) =>
    {
        if ( err === "JsonWebTokenError" )
        {
            return res.json( {
                message: "Token không hợp lệ!"
            } )
        }
        const user = await User.findById( decoded.id );
        if ( user.role !== "Admin" )
        {
            return res.status( 403 ).json( {
                message: "Bạn không có quyền truy cập!",
                
            } );
            
        }
       
        req.user = user;
        next();
    } );


};