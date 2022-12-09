import axios from "axios";
import { useState } from "react";

export default function useGetDataWithAxios(url: string) {

    const [data, setData] = useState<any>();
    const [errors, setErrors] = useState<any>();

    function getData() {
        axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        .then((res) => {
            setData(res.data);
        })
        .catch((err: any) => {
            setErrors(err);
        })
    }


    return {
        getData,
        data,
        errors
    }
}