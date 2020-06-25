import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import AxiosInstance from './axios-orders-instance'
import * as serviceWorker from './serviceWorker';
//Config 31. Routing and Server Deployment
import { BrowserRouter } from 'react-router-dom'
//Setting a Default Global Config Axios==> Cai nay nen tao thanh file Axios Instance roi goi ham o day
// axios.defaults.baseURL='url';
// axios.defaults.headers.common['Authorization']='AUTH TOEKN'//Khi Sao Toekn de xa minh
// axios.defaults.headers.post['Content-Type']='application/json'
//Cho vao Axios Instance ==> Import AxiosInstance va goi nhu Aoxios

//Set duong dan goc khi goi request khong can them vao nua 
//==============Add Interceptors==> Nguoi chan moi lan gui request hay respon ve thi ham nay chay
//Khong comment de quan sat du lieu nhe
// axios.interceptors.request.use(request => {

//     console.log('Request', request);
//     return request;//Nho return 

// }, err => {
//     console.log('Request Error', err);

// })
// axios.interceptors.response.use(response => {
//     console.log('Response', response);
//     return response;//Nho return 

// }, err => {
//     console.log('Response Error', err);

// })
//=================MUON IN RA THi Phai DUNG AXIOS InSTANCE 
// AxiosInstance.interceptors.request.use(request => {

//     console.log('Request', request);
//     return request;//Nho return 

// }, err => {
//     console.log('Request Error', err);

// })
// AxiosInstance.interceptors.response.use(response => {
//     console.log('Response', response);
//     return response;//Nho return 

// }, err => {
//     console.log('Response Error', err);

// })
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//Add comment