const express = require('express')
const axios = require('axios')
const app = express()
import {APIURL, GET_STORE_LIST_NEAREST_CITY} from "./user_http_methods"
//receive lat & long from customer device or input. or default the lat & long to center address.

let Menurequest = () => {
app.post("/", async (req, res) => {

        try{
            const response = await axios.post(APIURL, GET_STORE_LIST_NEAREST_CITY)
            alert(response.data)
        }
        catch (err){
            next(err)
        }
})
}
export default Menurequest