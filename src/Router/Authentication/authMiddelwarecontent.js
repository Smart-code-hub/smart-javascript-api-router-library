const AuthMiddelware = entity => {
  if (!entity.authEntity) return "";

  return `
    
      const authMiddleware = (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).send("UnAuthorized");;
        const payLoad = verify(token, ENV_SECRET_STRING);
        if (!payLoad) return res.status(401).send("UnAuthorized");;
        next();
      };`;
};

module.exports = AuthMiddelware;
