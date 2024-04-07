import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        token = token.replace('Bearer ', '');
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.loggedUser = verified;
        req.params.id = verified._id;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send('Invalid Token');
    }
};

export const authorize = (requiredRole) => {
    return (req, res, next) => {
        const roleasign = req.body.loggedUser.role[0];
        if (roleasign !== requiredRole) {
            return res.status(403).send('Forbidden Access');
        }
        next();
    };
}