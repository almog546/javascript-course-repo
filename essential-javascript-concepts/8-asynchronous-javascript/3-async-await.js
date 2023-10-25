// async/await:
// Async/await is a more readable and concise way to work with Promises. It allows you to write asynchronous code in a more synchronous style.

async function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from " + url;
      reject(data);
    }, 2000);
  });
}

async function fetchDataAndDisplay(url) {
  try {
    const data = await fetchData(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDataAndDisplay("www.google.com")