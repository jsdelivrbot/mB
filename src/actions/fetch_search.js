import { FETCH_SEARCH } from './types';
import { ROOT_URL } from './config';

export function fetchSearch(query, id) {
    /*
        Query param should be an object that contains all request info
            - Query
            - Type
            - Brand
        
        Deconstruct query param object to build our axios request

    */

    /*

        *** MAYBE THIS IS A MIDDLEWARES THING?! ***

        With the id of the our active user, create an array of existing bag item id's.

        When our axios request is returned, filter over the results and _.omit any existing id's.

        Ex.
        let filteredArray = results.filter(function (item) {
            return existingIds.indexOf(item["id"]) == -1;
        });

        *** MAYBE THIS IS A MIDDLEWARES THING?! ***
    
    */

    return {
        type: FETCH_SEARCH,
        payload: filteredRequest
    }
};