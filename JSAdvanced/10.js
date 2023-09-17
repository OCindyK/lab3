/*
Fetch is a browser-based function to send a request and receive a response from a server, 
which uses promises to handle the asynchronous response. 
The below fetchURLData uses fetch to check the response for a successful status 
code, and returns a promise containing the JSON sent by the remote server if successful 
or an error if it failed. (To run this code in a node.js environment, follow the instructions in 
the comments before the function.)
*/

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
    let fetchPromise = fetch(url).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
  
    return fetchPromise;
}
/*
console.log("fetchURLData:");
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
*/

console.log("");
console.log("=======================");
console.log(""); 


// a) Write a new version of this function using async/await
async function fetchURLDataAsync(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
/*  
  console.log("fetchURLData using async:");
  fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
*/

console.log("");
console.log("=======================");
console.log("");    


// b) Test both functions with valid and invalid URLs
// Test for fetchURLData
// With a valid URL
/*
console.log("Test of fetchURLData:")
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL:", data))
  .catch((error) => console.error("Valid URL Error:", error.message));

// With an invalid URL
console.log("with an invalid URL")
fetchURLData("https://jsonplaceholder.typicode.com/nonexistent")
  .then((data) => console.log("Invalid URL:", data))
  .catch((error) => console.error("Invalid URL Error:", error.message));
*/
/*
// Test for fetchURLData with async
// With a valid URL
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL:", data))
  .catch((error) => console.error("Valid URL Error:", error.message));

// With an invalid URL
fetchURLData("https://jsonplaceholder.typicode.com/nonexistent")
  .then((data) => console.log("Invalid URL:", data))
  .catch((error) => console.error("Invalid URL Error:", error.message));


console.log("");
console.log("=======================");
console.log("");  
*/

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.
async function fetchAllURLDataAsync(urls) {
    try {
        const responses = await Promise.all(
            urls.map(async (url) => {
                const response = await fetch(url);
                if (response.status === 200) {
                    const data = await response.json();
                    return data;
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            })
        );
        return responses;
    } catch (error) {
        throw error;
    }
}
  
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/posts/1",
  ];
  
fetchAllURLDataAsync(urls)
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));