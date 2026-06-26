import { test , expect } from "@playwright/test";

test("Login API and Get User profile Using Profile Token", async({request})=>{


    const loginData = {

        username: "emilys",
        password: "emilyspass"
    };

   const loginResponse = await request.post('https://dummyjson.com/auth/login', {
                
                headers: {
                    'Content-Type': 'application/json'
                },
                data: loginData
   });


   console.log("Login Status Code", loginResponse.status());

   expect(loginResponse.status()).toBe(200);

   const loginBody = await loginResponse.json();

   console.log("\n===============LOGIN RESPONSE================");

   console.log(loginBody);

   const accessToken = loginBody.accessToken ;

   expect(accessToken).toBeTruthy();

   console.log("\nAccess Token", accessToken);

   // Call Profile API

   const profileResponse = await request.get('https://dummyjson.com/auth/me',{

                   headers: {
                     
                    Authorization: `Bearer ${accessToken}`
                   }
   });


   // Print Profile Status Code

   console.log("\nProfile Status Code:",profileResponse.status());

   expect(profileResponse.status()).toBe(200);

   const profileBody = await profileResponse.json();

   console.log("\n========PROFILE BODY==========");

   console.log(profileBody);

})