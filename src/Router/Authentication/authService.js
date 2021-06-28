const GetAuthRoute = entity => {
  return entity.authPayLoads
    ? `router.route('/login').post(${entity.name.toLowerCase()}Controller.Authenticate)  `
    : "";
};

const AuthMiddelwaredeclaration = entity => {
  if (!entity.authEntity) return "";
  return `authMiddleware,`;
};

module.exports = {
  GetAuthRoute,
  AuthMiddelwaredeclaration
};
