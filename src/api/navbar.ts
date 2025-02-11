export const getNavbar = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/navbar");
    if (!response.ok) {
      throw new Error("Failed to fetch navbar items");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching navbar items:", error);
    throw error;
  }
};
