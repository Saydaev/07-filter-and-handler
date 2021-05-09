import React, {useState} from 'react';

function Heroes() {

    const [names, setNames]= useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]);

    const handleClick = (idx) => {
        setNames(names.filter((item,index) => {
            if (idx === index){
                return false
            } return true
        }))
    }

    return (
        <div>
            <ul>
            {names.map((item,index) => {
                return (
                    <li key={index} onClick={() => handleClick(index)}>{item}</li>
                )
            })}
            </ul>
        </div>
    );
}

export default Heroes;
