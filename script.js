//ques 1
function check(OrderId){
    return new Promise((resolve,reject)=>{
        if(typeof OrderId==="number"){
            setTimeout(()=>{
                resolve("order shipped")
            },1000);
        }else{
            reject("invalid order id");
        }
    });
}
async function orderStatusHandler() {
  try {
    const result = await check(101);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

orderStatusHandler();

// ques 2
function getUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Gunjan", type: "Premium" });
    }, 1500);
  });
}

function checkSubscription(user) {
  return new Promise((resolve, reject) => {
    if (user.type === "Premium") {
      resolve("Access Granted to Netflix");
    } else {
      reject("Please Subscribe");
    }
  });
}
async function authenticateUser() {
  try {
    const user = await getUser("Gunjan");
    const access = await checkSubscription(user);
    console.log(access);
  } catch (error) {
    console.log(error);
  }
}

authenticateUser();

"https://jsonplaceholder.typicode.com/users"