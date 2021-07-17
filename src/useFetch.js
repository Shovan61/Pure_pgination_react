import { useEffect, useState } from 'react';
import paginate from './utilites';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [isLoading, setisLoading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const getData = await response.json();

            setdata(paginate(getData));
            setisLoading(false);
        } catch {
            throw new Error('Url not found');
        }
    };

    return { isLoading, data };
};
