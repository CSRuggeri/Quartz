// src/models/user.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Users = sequelize.define('Users', {
    status: {
      type: DataTypes.ENUM,
      values: ['No contactado', 'No le interesa', 'Volver a llamar', 'Contactado'],
      allowNull: false,
      defaultValue: 'No contactado',
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productos: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Product, { through: 'UserProducts', foreignKey: 'userId' });
  };

  return Users;
};
