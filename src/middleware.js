const middleware = (req, res, next) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    req.a = a;
    req.b = b;
    next();
};

module.exports = { middleware };