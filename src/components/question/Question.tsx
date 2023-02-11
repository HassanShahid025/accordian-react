import './question.css'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import { useState } from 'react';

interface IProp{
    question:{
        id:number;
        title:string;
        info:string;
    }
}

export const Question = ({question}:IProp) => {

    const [expand, setexpand] = useState<boolean>(false);

    const expandText = () => {
        setexpand( () => !expand)    
    }

    return(
        <>
            <div className='question-container'>
                <h3>{question.title}</h3>
                {expand && <p>{question.info}</p>}
                <button onClick={expandText} className='toggle-btn'>
                    {expand ? <FaMinus/> : <FaPlus/>}
                </button>
            </div> 
        </>
    )
}