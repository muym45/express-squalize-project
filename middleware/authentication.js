const jwt = require('jsonwebtoken');
require('dontec').config();

const {JWT_SECRET_KEY} = proccess.env
async function authentication(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          message: "Invalid Token, Unauthorized"
        })
      }
      req.user = decoded;
      return next();
    })
  }
  
  module.exports = authentication;