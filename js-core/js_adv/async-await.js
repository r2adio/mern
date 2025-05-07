function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "google", url: "https://google.com" });
    }, 3000);
  });
}
//fetchUserData().then().catch();

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    //console.log(`User data: ${userData}`);  {ERROR: User data: [object Object]}
    console.log("User data: ", userData);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
getUserData();
