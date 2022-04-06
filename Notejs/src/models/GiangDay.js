'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiangDays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    GiangDays.init({
        NamHoc: DataTypes.DATE,
        MaLop: DataTypes.INTEGER,
        MaGV: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GiangDays',
  });
  return GiangDays;
};