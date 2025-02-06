import jwt from 'jsonwebtoken';

export const generateToken = (userId ,res) => {

    const token = jwt.sign({userId}, "7f7b4b3b-4b7d", {
        expiresIn: '3d'
    });

    res.cookie("jwt", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite:"strict",
 }); 

 return token;
};