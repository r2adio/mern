//Promises:
//it takes a callback, aka function.

//promise creation:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//consume the promise:

//let response = fetchData(); //Promise { <pending> }
//console.log(response);

fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

//Data fetched successfully, {when success=true}
//Error fetched data, {when success=false}
