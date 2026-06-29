import { APIResponse } from "@playwright/test";
import { ApiHelper } from "../utils/ApiHelper";
import { User } from "../models/User";

export class UserAPI{

    private apiHelper: ApiHelper;

    constructor(apiHelper: ApiHelper){
        this.apiHelper= apiHelper;
    }

    // GET /users/:id
    async getUser(userId: number): Promise<APIResponse>{

         return await this.apiHelper.get(`/users/${userId}`);
    }


    //POST /users

    async createUser(userData: User ): Promise<APIResponse>{

         return await this.apiHelper.post("/users",userData);
    }

    //PUT /users/:id

    async updateUser(userId: number, userData:User): Promise<APIResponse>{

        return await this.apiHelper.put(`/users/${userId}`,userData);
    }

    //DELETE /users/:id

    async deleteUser(userId: number): Promise<APIResponse>{

        return await this.apiHelper.delete(`/users/${userId}`);
    }


}