'use server';

import axios from 'axios';

export async function addCars(data: any) {
  console.log("data processed in server", data);
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URl}/add-car`, data);
    console.log("req status", res.status);
    return res.data;
  } catch (error) {
    console.log("error in server", error);
  }
}  

