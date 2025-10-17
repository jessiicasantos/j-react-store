import axios from "axios";
import { useEffect, useState } from "react"

export function useFetch<T>(endpoint: string) {
    const [ data, setData ] = useState<T | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/${endpoint}`).then(res => setData(res.data))
        .catch(err => console.error("Error fetching data: ", err));
    }, [endpoint]);

    return data;
}