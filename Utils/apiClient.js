const { request } = require('@playwright/test');

class APIClient {
  async createContext() {
    return await request.newContext({
      baseURL: 'https://petstore.swagger.io/v2', // ✅ MUST HAVE /v2
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }
}

module.exports = { APIClient };
