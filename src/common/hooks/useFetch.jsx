import { useEffect, useState } from "react";
import { FETCH_STATUS } from "../utils/AppUtils";

export const useFetch = ({ url }) => {

    const [data, setData] = useState();
    const [status, setStatus] = useState(FETCH_STATUS.PENDING);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    updateStates(data, FETCH_STATUS.SUCCESS);
                } else {
                    handleError();
                }
            } catch (e) {
                handleError();
            }
        }
        fetchData();
    }, [url]);

    const handleError = () => {
        updateStates([], FETCH_STATUS.ERROR);
    }

    const updateStates = (data, status) => {
        setData(data);
        setStatus(status);
    }

    return { data, status };
}