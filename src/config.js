// src/config.js
const BASE_URL = 'http://10.58.52.189:8000';
const BASE_URL2 = 'http://10.58.52.244:8000';
const BASE_URL3 = 'http://10.58.52.67:8000';
const BASE_URL6 = 'http://10.58.52.196:8000';
const BASE_URL4 = 'http://10.58.52.180:8000/';
const BASE_URL5 = 'http://10.58.52.239:8000/';

export const GET_SUBSCRIPTION_API = `${BASE_URL}/subscription`;
export const GET_PRODUCTLIST_API = `${BASE_URL}/product`;
export const GET_PRODUCT_API = `${BASE_URL}`;

export const GET_MOCK_API = `/data/data.json`;
export const GET_CART_API = `${BASE_URL2}/cart`;
export const GET_CART_PAYMENT_API = `${BASE_URL3}/cart`;

export const GET_PAYMENT_ADDRESS_API = `${BASE_URL6}/cart/payment/address`;
export const POST_PAYMENT_NEW_ADDRESS_API = `${BASE_URL6}/cart/payment/address/done`;
export const GET_PRODUCT_DETAIL_API = `${BASE_URL4}/products`;
export const POST_CART_DETAIL_API = `${BASE_URL5}/cart`;
