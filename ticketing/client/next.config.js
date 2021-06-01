module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: 'http://auth:3000',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: 'https://posts.com',
  },
};
