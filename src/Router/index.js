const loadAuthMiddleWareLibraries = require("./Authentication/authLibraries");
const AuthMiddelware = require("./Authentication/authMiddelwarecontent");

const {
  ImageUpload,
  UploadImageMiddelwaredeclaration
} = require("./Image/ImageService");

const {
  AuthMiddelwaredeclaration,
  GetAuthRoute
} = require("./Authentication/authService");

const GetContentFromRequestForJavascript = entity => {
  let isImageProp = false;
  const properties = entity.properties;

  isImageProp = properties.some(a => a.isImage);
  let imageFields = [];
  if (isImageProp) {
    imageFields = properties.filter(a => a.isImage);
  }

  return `
  ${LoadLibraries(entity)}
  ${isImageProp ? ImageUpload(entity) : ""}
  ${AuthMiddelware(entity)}
  router
    .route('/')
    .get(${AuthMiddelwaredeclaration(entity)}${entity.name}Controller.GetAll)
    .post(${AuthMiddelwaredeclaration(entity)}
           ${
             isImageProp
               ? UploadImageMiddelwaredeclaration(imageFields) + ","
               : ""
           }${entity.name}Controller.Create);
  
      ${GetAuthRoute(entity)}    
  
  router
    .route('/:id')
    .get(${AuthMiddelwaredeclaration(entity)}${
    entity.name
  }Controller.GetOneById)
    .put(${AuthMiddelwaredeclaration(entity)}${
    isImageProp ? UploadImageMiddelwaredeclaration(imageFields) + "," : ""
  }
      ${entity.name}Controller.UpdateById)
    .delete(${AuthMiddelwaredeclaration(entity)}${
    entity.name
  }Controller.Delete);
  
  module.exports =  router;`;
};

function LoadLibraries(entity) {
  return `  
  const  express = require('express');
  const  path = require('path');
  const fs = require("fs");
  
  const  ${
    entity.name
  }Controller = require('../controllers/${entity.name.toLowerCase()}.controller');
const router = express.Router();
${loadAuthMiddleWareLibraries(entity)}`;
}

module.exports = GetContentFromRequestForJavascript;
