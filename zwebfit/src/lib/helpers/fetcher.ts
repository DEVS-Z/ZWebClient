export class Fetcher {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }
  private getToken(): string | null {
    try {
      if (typeof window === "undefined") return null;
      return localStorage.getItem("token");
    } catch {
      return null;
    }
  }
  
  private async request<T>(
    url: string,
    method: string,
    data?: any,
    customHeaders: Record<string, string> = {}
  ): Promise<T> {
    try {
      const token = this.getToken();
      console.log('[TOKEN]', token ? `${token.substring(0, 20)}...` : 'NO TOKEN');
      console.log('[REQUEST]', method, this.baseUrl + url);
      if (data) console.log('[DATA]', data);
      
      const response = await fetch(this.baseUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...customHeaders,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          // Try both formats if one fails
          // ...(token ? { Authorization: `Token ${token}` } : {}),
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[ERROR RESPONSE]', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      const result = (await response.json()) as T;
      return result;
    } catch (error) {
      console.error("Fetcher error:", error);
      throw error;
    }
  }

  async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, "GET", undefined, headers);
  }

  async post(url: string, data: any, headers?: Record<string, string>): Promise<any>;
  async post<T>(url: string, data: any, headers?: Record<string, string>): Promise<T>;
  
  async post<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, "POST", data, headers);
  }

  async put<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, "PUT", data, headers);
  }

  async patch<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, "PATCH", data, headers);
  }

  async delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, "DELETE", undefined, headers);
  }
}
