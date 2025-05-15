import axios from "axios";

export const productData = async () => {
    const products = await axios.get("https://api.escuelajs.co/api/v1/products")
    return products
}