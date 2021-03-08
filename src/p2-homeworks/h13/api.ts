import axios from "axios";
import React from "react";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test/'
})


export const testApi = {
    postSuccess(body: object){
       return instance.post('', body)
    }
}


/*
body: {success: true},*/
