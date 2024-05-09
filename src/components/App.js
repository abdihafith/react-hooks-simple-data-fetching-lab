// create your App component here
import React, { useEffect, useState } from "react";

const dogApi = 'https://dog.ceo/api/breeds/image/random'
function App() {
    const [dog, setDog] = useState(null)
    useEffect(() => {
        fetch(dogApi)
            .then((res) => res.json())
            .then((data) => {
                setDog(data.message);
            });

    }, []);
    if(!dog) return <p>Loading...</p>
    return <img src={dog} alt="A Random Dog" />

}

export default App;