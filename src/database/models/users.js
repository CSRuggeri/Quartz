import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('User', {
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

  User.associate = (models) => {
    // Define associations here
    User.belongsToMany(models.Product, { through: 'UserProducts', foreignKey: 'userId' });
  };

  return User;
};
