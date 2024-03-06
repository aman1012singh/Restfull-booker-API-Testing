import {faker} from '@faker-js/faker'


interface BookingData {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds: string;
}

export class BookingDataGenerator  {
    public static bookingData(): BookingData {
        return {
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            totalprice: +faker.string.numeric(),
            depositpaid: faker.datatype.boolean(),
            bookingdates: {
                checkin: faker.date.future().toISOString().split('T')[0],
                checkout: faker.date.future({}).toISOString().split('T')[0]
            },
            additionalneeds: faker.lorem.words()
        };
    }
}


