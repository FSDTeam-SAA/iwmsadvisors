import axios from "axios";
import { url } from "./api";

export async function getBanners() {
  try {
    const data = await axios.get(`${url}/banner/all`);
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch FAQs");
  }
}

export async function getAbout() {
  try {
    const data = await axios.get(`${url}/about/get`);
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch FAQs");
  }
}


export async function getFooter() {
  try {
    const data = await axios.get(`${url}/footer/get`);
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch FAQs");
  }
}

export async function getFeatures() {
  try {
    const data = await axios.get(`${url}/features/all`);
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch FAQs");
  }
} 
  

