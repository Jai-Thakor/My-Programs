function pay(event) {
    if (event.isTrusted) {
      alert("1000INR paid.💰");
    } else {
      alert("Fraud alert 🤦");
    }
  }  