const GetHelpContentFromRequest = entity => {
  return `
      //Please download the starter templte from the menu in starters
      //make following change in app.js for your newly created files
      
      
       //const  ${entity.name.toLowerCase()}Router = require("./routes/${entity.name.toLowerCase()}.route");
  
        and
  
       // app.use("/api/${entity.name.toLowerCase()}", ${entity.name.toLowerCase()}Router);
        // run npm i 
       // run npm start 
  
       //your api is up on http://localhost:3332/api
      `;
};
module.exports = GetHelpContentFromRequest;
