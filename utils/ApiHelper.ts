import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiHelper {
  //Stores playwright object

  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  //Reusable get method
  async get(url: string): Promise<APIResponse> {
    return await this.request.get(url);
  }

  //Reusable post method
  async post(url: string, data: object): Promise<APIResponse> {
    return await this.request.post(url, {
      data: data,
    });
  }

  //Reusable Put method
  async put(url: string, data: object): Promise<APIResponse> {
    return await this.request.put(url, {
      data: data,
    });
  }

  //Reusable PATCH method
  async patch(url: string, data: object): Promise<APIResponse> {
    return await this.request.patch(url, {
      data: data,
    });
  }

  //Reusable DELETE Method
  async delete(url: string): Promise<APIResponse> {
    return await this.request.delete(url);
  }
}
