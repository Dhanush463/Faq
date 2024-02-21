import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import { data, offers, payments, postpaid, prepaid, serviceActivationSetup } from "./FaqData";
const Faq = () =>{
    const [body,setBody] = useState(data);
    const handleCategory=(categoryData)=>{
        setBody(categoryData);
    }
    
    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick() {
        if (searchVal === "") {
            setBody(data); 
            return;
        }

        const filterBySearch = data.filter((item) => {
            return (
                item.question.toLowerCase().includes(searchVal.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchVal.toLowerCase())
            );
        });
        

        setBody(filterBySearch); 
    }
    return (
        <div className="faq-head">
            <h2 className="h2-text">FAQs</h2>
            <div className="faq-cat-head">
                <h2 className="topic">Select Topics</h2>
            </div>
            <div className="search">
                <input onChange={e=>{setSearchVal(e.target.value)}} className="search-input" type="text" placeholder="Enter your query"></input>
                
                <button type="button" onClick={handleSearchClick} className="btn btn-primary">Search</button>
            </div>        
                    
            
            
            <div className="container">
                <div className="row">
                        <div className="col-md-4">
                            <div className="faq-cat">
                                <div className="faq-cat-body">
                                    <div className="faq-cat-item" onClick={() => handleCategory(data)}>All</div>
                                    <div className="faq-cat-item" onClick={() =>handleCategory(prepaid)}>Prepaid offer</div>
                                    <div className="faq-cat-item" onClick={() =>handleCategory(postpaid)}>Postpaid offer</div>
                                    <div className="faq-cat-item" onClick={() =>handleCategory(serviceActivationSetup)}>Service Activation and Setup</div>
                                    <div className="faq-cat-item" onClick={() =>handleCategory(offers)}>Offers</div>
                                    <div className="faq-cat-item" onClick={() =>handleCategory(payments)}>Payments</div>
                                </div>  
                            </div>
                        </div>
                    <div className="col-md-8">
                        {body.map((item) => (
                        <FaqItem question={item.question} answer={item.answer}/>
                    ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

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


export default Faq;
