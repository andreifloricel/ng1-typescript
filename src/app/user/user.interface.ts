/**
 * File created by suenlue on 15.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
export default interface IUser {
    id: string;
    firstname: string;
    lastname: string;
    birthday: string;
    street?: any;
    street_no?: any;
    zip?: any;
    city?: any;
}
