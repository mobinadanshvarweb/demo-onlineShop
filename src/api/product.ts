export const getProduct = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch navbar items");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching navbar items:", error);
    throw error;
  }
};
