import React, {useEffect, useState} from "react";
import axios from "axios";

function Dogs() {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Using Axios to fetch data
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                setImage(response.data);  // Axios packs the response in a 'data' property
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Dogs</h1>
            <img src={image.message} alt="Dog"></img>
        </div>
    );
}

export default Dogs;