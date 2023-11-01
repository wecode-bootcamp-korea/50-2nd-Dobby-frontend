// src/config.js
const BASE_URL = 'http://10.58.52.105:8000';
const BASE_URL2 = 'http://10.58.52.239:8000';
const PRODUCT_URL = 'http://10.58.52.239:8000';

export const GET_SUBSCRIPTION_API = `${BASE_URL}/subscription`;
export const GET_PRODUCTLIST_API = `${BASE_URL}/productlist`;

export const GET_PRODUCT_API = `${PRODUCT_URL}`;

export const GET_MOCK_API = '/data/data.json';
export const GET_CART_API = `${BASE_URL2}/cart`;
export const GET_CART_PAYMENT_API = `${BASE_URL2}/cart/payment`;
