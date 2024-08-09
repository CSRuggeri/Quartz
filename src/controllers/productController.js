import { createProduct, getProducts, getProductsById, getProductsByName, updateProduct, deleteProduct } from "../services/ProductsService.js";

export const addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getProductsById(id);
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: "Error retrieving product" });
  }
};

export const getProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await getProductsByName(name);
    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: "Error retrieving product" });
  }
};


export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedProduct = await updateProduct(id, updateData);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: error.message });
  }
};


export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProduct(id);
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: error.message });
  }
};
