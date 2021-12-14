'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedidos.belongsTo(models.Cliente);
      Pedidos.belongsToMany(models.Servico,{
        through: "Itempedido"
      });
    }
  };
  Pedidos.init({
    dataPedidos: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};