

import React, {useState, useEffect, useReducer} from "react";
import axios from "axios"
import

import {APIURL, GET_STORE_LIST_NEAREST_CITY} from "./user_http_methods"
//receive lat & long from customer device or input. or default the lat & long to center address.

function StoreData() {
    const [data, setData] = useState(
        {StoreList: "", {
            Store1: "", {

            },
            Store2: 
        }
        }


    );

}

//listen for changes

//update state
// setState((prevState)=>({...prevState,team:[
//     ...prevState.team,
//     {
//     name: "two",
//      id: "2"
//     }
// ]}))