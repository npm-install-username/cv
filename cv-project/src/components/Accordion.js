import React, {useState, useEffect, useRef} from 'react'
import "../styles/Accordion.scss"
import Chevron from '../svg/chevron.svg';
import TextInput from './TextInput';

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()
    

    useEffect(() => {
        if(props.type ==='text'){
            setHeightEl(`600px`)
        }
        if(props.type ==='record'){
            setHeightEl(`${refHeight.current.scrollHeight}px`)
        }
        
    }, [props.type])

    const toggleState = () => {
        setToggle(!toggle)
    }
    
    

    if(props.type ==='text'){
        return (
            <div className="accordion">
    
                <button 
                onClick={toggleState}
                className="accordion-visible">
                    <span>{props.title}</span>
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
                        <TextInput content = {props.content} title = {props.title} updateCVContent = {props.updateCVContent}/>
                    </p>
                </div>
                
            </div>
        )
    }
    if(props.type ==='record'){
        return (
            <div className="accordion">
    
                <button 
                onClick={toggleState}
                className="accordion-visible">
                    <span>{props.title}</span>
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
                        +
                    </p>
                </div>
                
            </div>
        )
    }
    
    

}
   
