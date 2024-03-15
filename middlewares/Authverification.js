// This is the only middleware which is genearally used for the purpose  only to verify and not to sign 
// the token. This middleware is used to verify the token and check if the user is authenticated or not.
// This middleware is used in the protected routes to check if the user is authenticated or not.
// This middleware is used in the routes which are protected and the user needs to be authenticated to access them.
//this middlware does not use the jwt.sign method to sign the token but uses the jwt.verify method to verify the token.
const jwt = require('jsonwebtoken');

const jwtauth = async(req,res,next)=>{
    const {authorization} = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"You must be logged in"})
    }
    const token = authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({error:"You must be logged in"})
    }
    try{
        const checking = await jwt.verify(token,process.env.SECRET);
        next();
    }
    catch(err){
        return res.status(401).json({error:"You must be logged in"})
    }
}

module.exports = jwtauth;