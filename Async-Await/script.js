async function getLion() {
    return "🦁";
  }
  async function compare() {
    const lion = await getLion(); //Without await the ouput will be false
    console.log(lion === "🦁");
  }
  compare();
  