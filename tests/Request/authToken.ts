export class AuthToken{
    public static async generateAuthToken({request}){
        try {
            //  API requires some form of authentication, such as username/password
            const response = await request.post('https://restful-booker.herokuapp.com/auth', 
            {
                headers: { 'Content-Type': 'application/json' },
                data: { username:"admin", password:  "password123"}
            });
    
            // Check if authentication was successful
            if (response.ok()) {
                const responseBody = await response.json();
                const authToken = responseBody.token; // The token is provided in the response body
                return authToken;
               
            } else {
                throw new Error(`Failed to generate authentication token. Status: ${response.status()}, Error: ${response.statusText()}`);
            }
        } catch (error) {
            console.error('Error generating authentication token:', error);
            throw error; // Throw the error to be caught by the test
        }
    }

}