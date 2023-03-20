const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    const token = req.header("x-auth-token");
    if(!token)
        return res.status(400).send({message:"Access denied, no token provided"});

    jwt.verify(token,process.env.JWT_PRIVATE_KEY, (error,validToken) => {
        if(error) {
            return res.status(400).send({message:"Invalid Token"});
        }
        else {
            req.user = validToken;
            next();
        }
    })    
}