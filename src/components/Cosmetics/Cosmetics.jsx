import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {name:'Shuna', Price:40000, id:'1'},
        {name:'Rufa', Price:10000, id:'2'},
        {name:'Ruby', Price:30000, id:'3'},
        {name:'Diamond', Price:60000, id:'4'},
        {name:'Platinum', Price:100000, id:'5'}
    ]
    return (
        <div>
            {cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)}
        </div>
    );
};

export default Cosmetics;