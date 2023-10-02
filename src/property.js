import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';
import Card from './components/card';

export default function Property(){

    const {id} = useParams();
    const [card, setCard] = useState([]);

    useEffect(()=>{
        console.log(id);
       const tempCard= data.filter( (item) => item.id === parseInt(id));
        console.log(tempCard);
       setCard(tempCard);
    },[id])

    return(
        <div style={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {
            card.length === 1?  <Card data={card[0]}/> : ''
        }
        </div>
    )
}