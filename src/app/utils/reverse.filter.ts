/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
 

export default function reverse  (  ) {

    
    return function filter ( input: any ): any{
        return input.split('').reverse().join('');
    }
    
}