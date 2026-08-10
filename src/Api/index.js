import { toast } from "react-toastify";
import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_API_URL}`;

export const getAllPersons = async (search = '') => {
    try {
        const response = await axios.get(`${API_BASE}api/person`, {
            params: search ? { search } : {},
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed to load members');
    }
};

/**
 * Creates a person with one or more companies in a single request.
 *
 * @param {{ name: string, phone: string, email?: string, companies: Array<{companyName: string, keywords: string}> }} personData
 * @param {File[]} logoFiles - one file per company, SAME ORDER as personData.companies
 */
export const createPerson = async (personData, logoFiles) => {
    try {
        const formData = new FormData();
        formData.append('name', personData.name);
        formData.append('phone', personData.phone);
        if (personData.email) formData.append('email', personData.email);
        formData.append('companies', JSON.stringify(personData.companies));
        logoFiles.forEach((file) => formData.append('logos', file));

        const response = await axios.post(API_BASE, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed to add member');
        throw error;
    }
};
