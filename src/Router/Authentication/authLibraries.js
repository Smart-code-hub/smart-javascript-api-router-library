const loadAuthMiddleWareLibraries = entity => {
  if (!entity.authEntity) return "";

  return `
      const { verify } = require('jsonwebtoken');
      const ENV_SECRET_STRING = 'The_String_Present_In_Your_${entity.authEntity.entityName}Controller';`;
};
module.exports = loadAuthMiddleWareLibraries;
