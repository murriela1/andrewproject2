'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    highScore: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Answer);
      }
    }
  });
  return User;
};
//this is more of front-end work
// Instead of this why don't you creat efront-end in angularjs/react
// This project should just consist of APIs serving json data
// There should be ideally seperate project for frontend which will hit this backend 
// and show the data
