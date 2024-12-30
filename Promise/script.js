function getUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false;
        if (success) {
          resolve({ Name: "Jai", Age: 26, Sex: "Male" });
        } else {
          reject("Error! Failed To Fetch Data");
        }
      }, 3000);
    });
  }
  
  getUserData()
    .then((e) => console.log("User Data:", e))
    .catch((err) => console.error(err));

   //Chaining Promise
   new Promise((resolve, reject) => resolve(10))
  .then((e) => {
    console.log(e);
    return e * 2;
  })
  .then((e) => {
    console.log(e);
    return e * 3;
  })
  .then((e) => {
    console.log(e);
  });
 