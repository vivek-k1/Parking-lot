// API Handler Module
class APIHandler {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.timeout = 5000;
  }

  async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}/${endpoint}`, {
        timeout: this.timeout
      });
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async postData(endpoint, data) {
    return fetch(`${this.baseURL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
}

module.exports = APIHandler;
