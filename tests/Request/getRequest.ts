export class GET{
    public static async getBookingDetails({request}, bookingid:number){
        try {
            const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
                return response; // Return the response object
        } catch (error) {
            console.error('Error creating booking:', error);
            throw error; // Throw the error to be caught by the test
        }
    }
}