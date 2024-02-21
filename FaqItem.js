import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const FaqItem =({question, answer})=>{

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };
    
      
    // <FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#63E6BE",}} />
    // npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

    return (
        <div className={`faq-item ${show ? "active" : ""}`}>
            <div className="faq-item-header" onClick={toggleShow}>
            {question}
            
            <div className="icon-container">
                <FontAwesomeIcon icon={show ? faMinus : faPlus} style={{ color: show ? "#e81111" : "#63E6BE" }} />
            </div>
            </div>
                <div className="faq-item-body" >
                    <div className="faq-item-body-content">
                        {answer} 
                    </div>
                </div>
        </div>
    )
}

export default FaqItem;