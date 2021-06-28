const prettier = require("prettier");
const GetContentFromRequestForJavascript = require("./src/Router/index");
const GetHelpContentFromRequest = require("./src/Help/index");

function ProcessRoute(entity) {
  try {
    const content = GetContentFromRequestForJavascript(entity);
    return prettier.format(content);
  } catch (error) {
    return { error };
  }
}
function GetHelpFile(entity) {
  try {
    const content = GetHelpContentFromRequest(entity);
    return content;
  } catch (error) {
    return { error };
  }
}

module.exports = {
  ProcessRoute,
  GetHelpFile
};
