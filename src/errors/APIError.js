export default class APIError extends Error {
  constructor(response, body) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.message = (
      body?.error || `${response.status} - ${response.statusText}`
      // Optional chaining (?) -  verifica se o valor é nullish(null ou undefined));
    );
  }
}
