export default function getFullResponseFromAPI(success) {
  // Return a new Promise.
  return new Promise((resolve, reject) => {
    // Check the value of the 'success' parameter.
    if (success) {
      // If 'success' is true, resolve the promise with object representing a successful response.
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If 'success' is false, reject the promise with an error object.
      reject(new Error('The fake API is not working currently'));
    }
  });
}
