class AviasalesService {
  _apiBase = `https://aviasales-test-api.kata.academy`;

  async getSearchId() {
    try {
      const response = await fetch(`${this._apiBase}/search`);

      if (!response.ok) {
        throw new Error(`Error: Request status ${response.status}`);
      }

      const id = await response.json();

      return id.searchId;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getPackOfTickets(searchId) {
    try {
      const response = await fetch(
        `${this._apiBase}/tickets?searchId=${searchId}`
      );

      if (!response.ok) {
        throw new Error(`Error: Request status ${response.status}`);
      }

      const tickets = await response.json();

      return tickets;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const aviasalesService = new AviasalesService();

export default aviasalesService;
