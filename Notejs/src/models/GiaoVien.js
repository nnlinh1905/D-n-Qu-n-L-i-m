'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiaoViens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GiaoViens.init({
    HoTenGV: DataTypes.STRING,
    MaXaPhuong: DataTypes.INTEGER,
    MaChuyenMon: DataTypes.INTEGER,
    MaChucDanh: DataTypes.INTEGER,
    MaTonGiao: DataTypes.INTEGER,
    GioiTinh: DataTypes.STRING,
    NgaySinh: DataTypes.DATE,
    DiaChi: DataTypes.STRING,
    Email: DataTypes.STRING,
    SDT: DataTypes.STRING,
    Password: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'GiaoViens',
  });
  return GiaoViens;
};