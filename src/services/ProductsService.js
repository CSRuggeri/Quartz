import { loadModels } from "../database/db.js";
import { Op } from 'sequelize';

const getProducts = async () => {
    const { Products } = await loadModels();
    const allProducts = await Products.findAll();
    return allProducts;
};

const createProduct = async (productData) => {
    const { Products } = await loadModels();
    const newProduct = await Products.create(productData);
    console.log('Product registered successfully:', newProduct);
    return newProduct;
};

const getProductsById = async (id) => {
    const { Products } = await loadModels();
    const dbProductsById = await Products.findByPk(id);
    console.log(dbProductsById);
    return dbProductsById;
};

const getProductsByName = async (name) => {
    const { Products } = await loadModels();
    const dbProductsByName = await Products.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        }
    });
    console.log(dbProductsByName);
    return dbProductsByName;
};

// Nueva función para editar un producto
const updateProduct = async (id, updateData) => {
    const { Products } = await loadModels();
    const [updatedRowsCount] = await Products.update(updateData, {
        where: {
            id: id
        }
    });

    if (updatedRowsCount === 0) {
        throw new Error('Product not found or no changes were made');
    }

    const updatedProduct = await getProductsById(id);
    console.log('Product updated successfully:', updatedProduct);
    return updatedProduct;
};

// Nueva función para eliminar un producto
const deleteProduct = async (id) => {
    const { Products } = await loadModels();
    const deletedRowsCount = await Products.destroy({
        where: {
            id: id
        }
    });

    if (deletedRowsCount === 0) {
        throw new Error('Product not found');
    }

    console.log('Product deleted successfully');
    return { message: 'Product deleted successfully' };
};

export { createProduct, getProducts, getProductsById, getProductsByName, updateProduct, deleteProduct };
