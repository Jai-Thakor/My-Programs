//Callback Function
const CallbackFnc = () => console.log(`I'm The Callback Function`);
//Function With Callback
const FncWithCallback = (e) => {
  console.log(`Hey I'm Function With Callback`);
  e();//Invoke The Callback Function
};

FncWithCallback(CallbackFnc);
