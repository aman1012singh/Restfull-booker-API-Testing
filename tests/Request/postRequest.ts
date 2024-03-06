export class POST{
    public static async  createBooking({request}, bookingData: any){
        try {
            const response = await request.post('https://restful-booker.herokuapp.com/booking', 
                {
                    data : bookingData
                });
                return response; // Return the response object
        } catch (error) {
            console.error('Error creating booking:', error);
            throw error; // Throw the error to be caught by the test
        }
        

    }
}