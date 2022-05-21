import React, {useState, useEffect, useRef} from 'react'
import "../styles/Accordion.scss"
import Chevron from '../svg/chevron.svg';
import TextInput from './TextInput';

export default function Accordion({title}) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`1000px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{title}</span>
                <img 
                className={toggle && "active"}
                src={Chevron} alt='>' />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    <TextInput />
                </p>
            </div>
            
        </div>
    )
}