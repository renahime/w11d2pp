'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        isTitleCap(value) {
          let words = value.split(' ');
          for(let word of words) {
            if(word[0] !== word[0].toUpperCase()){
              throw new Error('you gotta uppercase my guy')
            }
          }
        }
      },
      allowNull:false,
    },
    description: {
      type:DataTypes.STRING
    },
    territory: {
      type: DataTypes.STRING
    },
    fact: {
      type:DataTypes.STRING,
      validate: {
        len:[0,240],
      },
    },
    millimeters: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min:0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
