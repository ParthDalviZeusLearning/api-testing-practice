import {test , expect} from "@playwright/test";

test('GET Request with Headers', async({request})=>{


    const url="https://jsonplaceholder.typicode.com/users/1";

    const response = await request.get(url, {

        headers:{

            //Tells the server that we expect JSON in response
            Accept: 'application/json',
            // Tells the server that the request content is JSON
            'Content-Type' : 'application/json'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1);


    console.log("Response Headers");
    console.log(response.headers());
    
    console.log(response.headers()['content-type']);
})