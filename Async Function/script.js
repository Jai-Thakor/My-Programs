function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ Name: "jai", age: 26 }), 2000);
    });
  }
  async function displayData(params) {
    console.log("Fetching Data....");
    const userData = await fetchData();
    console.log("Fetched Data :", userData);
  }
  displayData()