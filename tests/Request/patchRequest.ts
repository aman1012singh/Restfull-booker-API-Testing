import { request, Response } from '@playwright/test';
export class PATCH{
    public static async patchBooking({request}:any, bookingId: string, patchData: any, authToken: string) {
        try {
            const response = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    Cookie: `token=${authToken}`,
                    Accept: "*/*",   
                },
                data: patchData
            });
            
            // Check if request was successful
            if (response.ok()) {
                return response;
            } else {
                throw new Error(`Failed to patch booking. Status: ${response.status()}, Error: ${response.statusText()}`);
            }
        } catch (error) {
            console.error('Error patching booking:', error);
            throw error; // Throw the error to be caught by the test
        }
    }
}


