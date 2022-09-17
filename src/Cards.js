import React, {useState} from "react";
import TinderCard from 'react-tinder-card';

function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Richard Hendricks',
            url: './Assets/Images/richard.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: './Assets/Images/erlich.jpg'
        }
    ])

    return ( 
        <div>
            {people.map(person => (
                <TinderCard>
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
                    className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
     );
}

export default Cards;