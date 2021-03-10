import React, {useState} from 'react';

function Lunges () {
    const [lunges, setlunges] = useState(0);

    return (
        <div>
        <h2>Lunges: {lunges}</h2>
        <button onClick={() => setlunges(lunges + 1)}>Lunge count</button>
        <button onClick={() =>setlunges(0)}>Reset Counter</button>
        </div>
    )
}

export default Lunges;