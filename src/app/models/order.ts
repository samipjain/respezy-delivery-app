export interface IOrder {
    "uuid": String;
    "pickup": {
        "name": String;
        "address": String;
        "phone_number": String;
    };
    "dropoff": {
        "name": String;
        "address": String;
        "phone_number": String;
    };
    "contents": [
        {
            "name": String;
            "quantity": Number
        }
    ]
    
}

export class Order implements IOrder {
    uuid: '';
    pickup: {
        name: '';
        address: '';
        phone_number: '';
    };
    dropoff: {
        name: '';
        address: '';
        phone_number: '';
    };
    contents: [
        {
            name: '';
            quantity: 0;
        }
    ];
}
