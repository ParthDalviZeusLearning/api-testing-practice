import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiHelper {
  //Stores playwright object

  private request: APIRequestContext;
  private baseUrl: string; 

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl= process.env.BASE_URL!;
  }

  //Reusable get method
  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}${endpoint}`);
  }

  //Reusable post method
  async post(endpoint: string, data: object): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}${endpoint}`, {
      data: data,
    });
  }

  //Reusable Put method
  async put(endpoint: string, data: object): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}${endpoint}`, {
      data: data,
    });
  }

  //Reusable PATCH method
  async patch(endpoint: string, data: object): Promise<APIResponse> {
    return await this.request.patch(`${this.baseUrl}${endpoint}`, {
      data: data,
    });
  }

  //Reusable DELETE Method
  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}${endpoint}`);
  }
}
