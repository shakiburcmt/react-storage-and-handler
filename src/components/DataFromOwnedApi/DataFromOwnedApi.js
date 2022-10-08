import React, { useEffect, useState } from 'react';
import LoadedData from '../LoadedData/LoadedData';

const DataFromOwnedApi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1>Created API</h1>
            {
                data.map(id => <LoadedData id={id}></LoadedData>)
            }
        </div>
    );
};

export default DataFromOwnedApi;