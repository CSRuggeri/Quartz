import { DataTypes } from 'sequelize';


export default (sequelize) => {

 const Upload =  sequelize.define('Upload', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    

    url: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    


  }, { timestamps: false });

  Upload.associate = (models) => {
    Upload.belongsTo(models.Product, { through: 'uploadProducts', foreignKey: 'productId' });
  };
};