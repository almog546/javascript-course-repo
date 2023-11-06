export const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const convertCurrency = (usdAmount) => {
  return usdAmount * 55; // return PHP amount
};

export default convertCurrency; // export convertCurrency in default