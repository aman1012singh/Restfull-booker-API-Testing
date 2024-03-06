import { test, expect } from '@playwright/test';
import { BookingDataGenerator } from '../Pojo/bookingGenerator';
import { GET } from '../Request/getRequest';
import { POST } from '../Request/postRequest';
import { DELETE } from '../Request/deleteRequest';
import { PUT } from '../Request/putRequest';
import { PATCH } from '../Request/patchRequest';
import { AuthToken } from '../Request/authToken';
import { Validation } from '../Validator/validation';



// POJO to build data for post request
const bookingData = BookingDataGenerator.bookingData()
;

// Variable to store Booking Id
let bookingid;

test.describe.serial('Api Test Suite', async () => {
    test("",async ({request}) => {
        // Step 1: Create a Booking
        const createResponse = await POST.createBooking({request},bookingData);
        const responseBody = await createResponse.json();
        // Step 2: Assert the response of Create Booking request
        Validation.postResponseValidate(await createResponse,bookingData);
        // Step 3: Save the Booking Id
        bookingid = responseBody.bookingid;
    });

    test("Get Booking Details", async ({request}) => {
        // Step 4: Get Booking details using Booking Id
        const getResponse = await GET.getBookingDetails({request}, bookingid);
        // Step 5: Compare with the create booking response
        Validation.getResponseValidate(await getResponse,bookingData)
        // expect(responseBody).toEqual(bookingData);
    });

    test("Update Booking", async ({request}) => {
        // Step 6: Generate AUTH token
        const authToken = await AuthToken.generateAuthToken({request});
        // Step 7: Update all booking details using Booking Id and AUTH token
        const updatedBookingData = { ...bookingData, totalprice: 1000 }; // Example update
        const updateResponse = await PUT.updateBooking({request}, bookingid, updatedBookingData, authToken);
        // Step 8: Assert the status code and response of update booking
        Validation.putResponseValidate(updateResponse,updatedBookingData);
        expect(updateResponse.status()).toBe(200);
    });

    test("Patch Booking", async ({request}) => {
        // Step 9: Update firstname and totalprice using Patch request
        const patchData = { firstname: "AMAN", totalprice: 300 }; // Example patch data
        const authToken = await AuthToken.generateAuthToken({request});
        const patchResponse = await PATCH.patchBooking({request} ,bookingid, patchData, authToken);
        // Step 10: Assert the status code and response from Patch request
        Validation.patchResponseValidate(patchResponse, patchData);
    });

    test("Delete Booking", async ({request}) => {
        const authToken = await AuthToken.generateAuthToken({request});
        // Step 11: Delete the booking
        const deleteResponse = await DELETE.deleteBooking({request},bookingid, authToken);
        // Assert the status code
        expect.soft(deleteResponse.status()).toBe(201);
        Validation.deleteResponseValidate(deleteResponse);
      

        // Additional step to confirm deletion
        // Attempt to get the deleted booking
        const deletedBookingResponse = await GET.getBookingDetails({request}, bookingid);
        // Confirm that booking is not found (status code 404)
        expect(deletedBookingResponse.status()).toBe(404);
    });
});


