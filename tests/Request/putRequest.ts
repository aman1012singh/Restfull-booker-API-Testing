export class PUT{
    public static async updateBooking({request}:any , bookingId: any, updatedBookingData: any, authToken:any){
        try {
            const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    Cookie: `token=${authToken}`,
                    Accept: "*/*",
                },
                data: updatedBookingData
            });
            // Check if request was successful
            if (response.ok()) {             
                return response;
            } else {
                throw new Error(`Failed to update booking. Status: ${response.status()}, Error: ${response.statusText()}`);
            }
        } catch (error) {
            console.error('Error updating booking:', error);
            throw error; // Throw the error to be caught by the test
        }

    }
}