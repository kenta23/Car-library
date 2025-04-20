'use server';

import axios from 'axios';
import { formType } from '../admin/add-item/form-items';

export async function addCars(data: formType) {
  console.log("data processed in server", data);

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URl}/admin/add-car`, data);
    console.log('Form data in server',data);

    return data;
  } catch (error) {
    console.log("error in server", error);
  }
}  

