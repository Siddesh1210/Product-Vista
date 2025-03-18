// Utility to load from localStorage
  export const loadCompareProducts = () => {
    const saved = localStorage.getItem("compareProducts");
    return saved ? JSON.parse(saved) : [];
  };
  
  // Utility to save to localStorage
  export const saveCompareProducts = (compareProducts) => {
    localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
  };
  
  // Utility to clear compareProducts from localStorage
  export const clearCompareProductsFromStorage = () => {
    localStorage.removeItem("compareProducts");
  };