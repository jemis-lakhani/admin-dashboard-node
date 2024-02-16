export const authenticate = (req, res, next) => {
  if (!req.session || !req.session.isLoggedIn || !req.session.username) {
    const err = new Error("Session Expired. Please try login again.");
    err.statusCode = 401;
    next(err);
  }
  next();
};
