var router = require("express").Router();

(() => {

    const path = require("path");
    const db = require("../models");
  
    const isAuthenticated = require("../config/middleware/isAuthenticated");
    
  
    module.exports = app => {
  
      // homepage - options to login or signup
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/template/realestate/index.html"));
      });  
  
    };
  
  })();