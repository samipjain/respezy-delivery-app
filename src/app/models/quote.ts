export interface IQuote {
    "kind": String;
    "id": String;
    "created": String;
    "expires": String;
    "fee": Number;
    "currency": String;
    "currency_type": String;
    "dropoff_eta": String;
    "duration": Number;
    "pickup_duration": Number;
}

export class Quote implements IQuote {
    "kind": '';
    "id": '';
    "created": '';
    "expires": '';
    "fee": 0;
    "currency": '';
    "currency_type": '';
    "dropoff_eta": '';
    "duration": 0;
    "pickup_duration": 0;
}
