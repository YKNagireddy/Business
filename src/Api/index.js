import { toast } from "react-toastify";
import axios from 'axios';

export const getAllPersons = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/person`
        );
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};