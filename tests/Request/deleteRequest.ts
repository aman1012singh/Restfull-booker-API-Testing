export class DELETE{
    public static async deleteBooking({request}:any ,bookingid:any,authToken:any){
        try {
            const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Cookie': `token=${authToken}`,
                    'Accept': "*/*",     
                }
            });
            
            // Check if request was successful
            if (response.ok()) {
                return response;
            } else {
                throw new Error(`Failed to delete booking. Status: ${response.status()}, Error: ${response.statusText()}`);
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
            throw error; // Throw the error to be caught by the test
        }

    }
}