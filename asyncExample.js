// The async keyword is used to declare a function that returns a Promise.
// The await keyword is used inside async functions to pause execution until a Promise resolves.

async function fetchData() {
    return "Data fetched";
}

fetchData().then(console.log);  // Output: Data fetched
// Here, fetchData() returns a Promise that resolves with "Data fetched".


// Using await to Fetch Data - Let's use fetch() to get data from an API.
async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
}

getUserData();
// here The first await waits for the API response.
// The second await waits for .json() to convert the response.