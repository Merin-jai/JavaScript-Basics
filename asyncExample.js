// -------------------------1-------------------------------------------
// The async keyword is used to declare a function that returns a Promise.
// The await keyword is used inside async functions to pause execution until a Promise resolves.

async function fetchData() {
    return "Data fetched";
}

fetchData().then(console.log);  // Output: Data fetched
// Here, fetchData() returns a Promise that resolves with "Data fetched".

// -----------------------------2--------------------------------------------
// Using await to Fetch Data - Let's use fetch() to get data from an API.
async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
}

getUserData();
// here The first await waits for the API response.
// The second await waits for .json() to convert the response.
// The console.log() is called after both await have resolved.
// The output will be the user data from the API.

// -------------------------------------3---------------------------------------------
// Error Handling with try...catch
// When working with async/await, we need error handling using try...catch to prevent the application from breaking due to failed promises.

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
        } 
    catch (error) {
        console.error("Error fetching data:", error);
        }
    }
fetchData();
// Here, if the fetch() or response.json() fails, the catch block will be executed,
// and the error will be logged to the console.
// The application will not crash due to the failed promises.


// ---------------------------------------4-------------------------------------------
// Chaining Promises with async/await
// We can chain multiple promises together using async/await by calling one function inside another.
// This is similar to using .then() to chain promises together.
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const post = data[0];
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const commentsData = await comments.json();
    console.log(commentsData);
    }
getPosts();
        // Here, we first fetch the posts data, then we fetch the comments data for the first post
        // We use the id of the first post to fetch the comments data.


// ---------------------------------------5-------------------------------------------