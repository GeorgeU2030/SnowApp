import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        token = token.replace('Bearer ', '');
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.loggedUser = verified;
        req.params.id = verified._id;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

export const authorize = (requiredRole) => {
    return (req, res, next) => {
        if (req.body.loggedUser.role !== requiredRole) {
            return res.status(403).send('Forbidden Access');
        }
        next();
    };
}