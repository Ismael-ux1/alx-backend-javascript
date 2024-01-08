export default function handleResponseFromAPI(promise) {
  // Append handlers to the Promise.
  return promise
    /* eslint-disable no-unused-vars */
    .then((response) => {
      // When the promise resolves, return an object with status
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // When the Promise rejects, return an empty Error object.
      console.error('Error:', error.message);
      return new Error();
    });
}
