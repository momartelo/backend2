import passport from 'passport'; //middleware within a web application to authenticate requests


export function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).send("Usuario no autentificado");
}