import axios from "axios";

const BASEURL = 'http://localhost:5000/api';

export const getNav = async () => {
    const response = await axios.get(`${BASEURL}/nav`);

    return response.data;
}

export const getFooter = async () => {
    const response = await axios.get(`${BASEURL}/footer`);

    return response.data;
}

export const getSocials = async () => {
    const response = await axios.get(`${BASEURL}/socials`);

    return response.data;
}

export const getHero = async () => {
    const response = await axios.get(`${BASEURL}/hero`);

    return response.data;
}

export const getPartners = async () => {
    const response = await axios.get(`${BASEURL}/partners`);

    return response.data;
}

export const getArrivals = async () => {
    const response = await axios.get(`${BASEURL}/arrivals`);

    return response.data;
}

export const getShopCollection = async () => {
    const response = await axios.get(`${BASEURL}/shop`);

    return response.data;
}

export const getBestSellers = async () => {
    const response = await axios.get(`${BASEURL}/bestseller`);

    return response.data;
}

export const getPromotions = async () => {
    const response = await axios.get(`${BASEURL}/promotions`);

    return response.data;
}

export const getIconCards = async () => {
    const response = await axios.get(`${BASEURL}/iconcards`);

    return response.data;
}

export const getNewspeed = async () => {
    const response = await axios.get(`${BASEURL}/newspeed`);

    return response.data;
}

export const getNewsletter = async () => {
    const response = await axios.get(`${BASEURL}/newsletter`);

    return response.data;
}

export const getSingleProd = async (id: string) => {
    const response = await axios.get(`${BASEURL}/products/${id}`);

    return response.data;
}