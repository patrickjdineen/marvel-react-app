import {serverCalls} from '../api';
import react, {useState, useEffect} from 'react';

export function useGetData(){
    const [heroData, setData] = useState([]);

    async function handleFetchData (){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {heroData, getData:handleFetchData}
};