export class Fetcher {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  // Método genérico para todas las peticiones
  private async request(
    url: string,
    method: string,
    data?: any,
    customHeaders: Record<string, string> = {}
  ) {
    try {
      const response = await fetch(this.baseUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...customHeaders,
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      return await response;
    } catch (error) {
      console.error("Fetcher error:", error);
      throw error;
    }
  }

  // Métodos HTTP específicos
  async get(url: string, headers?: Record<string, string>){
    return this.request(url, "GET", undefined, headers);
  }

  async post(url: string, data: any, headers?: Record<string, string>){
    return this.request(url, "POST", data, headers);
  }

  async put(url: string, data: any, headers?: Record<string, string>){
    return this.request(url, "PUT", data, headers);
  }

  async patch(url: string, data: any, headers?: Record<string, string>){
    return this.request(url, "PATCH", data, headers);
  }

  async delete(url: string, headers?: Record<string, string>){
    return this.request(url, "DELETE", undefined, headers);
  }
}
