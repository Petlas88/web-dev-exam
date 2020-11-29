import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const EntityContext = createContext()

export const EntityProvider = (props) => {
    const [entities, setEntities] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
           fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        const url = `https://localhost:5001/${props.endpoint}`
        axios.get(url).then(res => {
            setEntities(res.data);
        }).then(() => setLoading(false));
    }

    return (
        <EntityContext.Provider value={{entities: [entities, setEntities], fetchData, loading}}>
            {props.children}
        </EntityContext.Provider>
    )
}