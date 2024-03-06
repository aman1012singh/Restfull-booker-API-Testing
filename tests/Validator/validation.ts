import { expect } from "@playwright/test";

export class Validation{
    public  static async  postResponseValidate(response: any, requestBody:any){
        const responseBody= await response.json(); 
        //assert status code of response
        expect(response.status()).toBe(200);
        //assert response body is as expected to request body
        expect(responseBody.booking).toEqual(requestBody);
    }    
    public  static  async getResponseValidate(response: any, requestBody:any ){
        const responseBody= await response.json(); 
        //assert status code of response
        expect(response.status()).toBe(200);
        //assert response body is as expected to request body
        expect(responseBody).toEqual(requestBody);
    }
    public  static async  putResponseValidate(response: any, updatedBookingData:any){
        const responseBody= await response.json(); 
        //assert status code of response
        expect(response.status()).toBe(200);
        //assert response body is as expected to request body
        expect(responseBody).toEqual(updatedBookingData);  
    }
    public  static async  patchResponseValidate(response: any, patchData:any){
        const responseBody= await response.json(); 
        //assert status code of response
        expect(response.status()).toBe(200);
        //assert response body is as expected to updated request body
        expect(responseBody.firstname).toEqual(patchData.firstname);
        expect(responseBody.totalprice).toEqual(patchData.totalprice);
    }
    public  static async deleteResponseValidate(response: any){ 
        //assert status code of response
        expect(response.status()).toBe(201);
    }
}