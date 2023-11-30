import jwt from 'jsonwebtoken';

const authMiddleware =(req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];

        if(!token) {
            return res.status(401).json ({ error: 'No hay token de autorizacion' });
        }

        const decodedToken = jwt.verify(token, 'secreto');

        req.user = { userId: decodedToken.userId };

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json ({ error: ' Token invalido' });
    }
};

export default authMiddleware;