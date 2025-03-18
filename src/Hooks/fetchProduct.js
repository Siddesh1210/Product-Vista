import axios from "axios";

const fetchProduct = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    //Return Array of products
    return response.data.products; 
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw new Error(error.message);
  }
};

export default fetchProduct;
