import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

const homeSongs = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:8080/api/songs')
            .then(response => {
                const {data} = response.data
                setData(data);
                console.log(data);
            })
            .catch(error => {
            console.error(error);
            });
        };

        fetchData();
    },[]);

    return ( 
        <>
          <div className="ml-96">
            {data ? (
                <ul>
                {data.map(song => (
                    <li key={song.id}>{song.artist}</li>
                ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </>
     );
}
 
export default homeSongs;