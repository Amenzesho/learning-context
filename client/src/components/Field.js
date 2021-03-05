import React, {useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {

    const language = useContext(LanguageContext)

    const name = language === 'english' ? 'Name' : 'Naam';
    


    return(
        <div className="ui field">
            <label>{name}</label>
            <input />
        </div>
    )
}; 

export default Field;