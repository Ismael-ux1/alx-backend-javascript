export default function getResponseFromAPI() {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Mock API call
    setTimeout(() => {
      const data = 'Response from API';
      if (data) {
        resolve(data); // Resolve the promise with the data
      } else {
        reject(new Error('No data received')); // Reject the promise with an error message
      }
    }, 1000);
  });
}
