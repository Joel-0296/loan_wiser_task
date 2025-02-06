import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BaseFooter = (props) => {
  const navigateTabs = (direction) => {
    let currentIndex = props.docs.findIndex(tab => tab.dockeyval === props.dockey);         
      if (direction === "next") {        
      currentIndex = (currentIndex == props.docs.length-1)?currentIndex = 0 : currentIndex = currentIndex + 1;
      props.setDocKey(props.docs[currentIndex].dockeyval);
      props.setAppKey(props.docs[currentIndex].appkeyval);
    }    
      if (direction === "prev") {      
      if(currentIndex == 0){
        currentIndex = props.docs.length;
      }
      currentIndex = (currentIndex == 0)? currentIndex = props.docs.length : currentIndex;
      props.setDocKey(props.docs[currentIndex - 1].dockeyval);
      props.setAppKey(props.docs[currentIndex - 1].appkeyval);
    }    
  };
  return (
    <>
      <div class="d-flex justify-content-between align-items-center">
        <Button variant="primary" 
    onClick={() => navigateTabs("prev")}
    >
          <FaArrowLeft className="me-2" /> Back
        </Button>
        <Button  variant="primary" 
    onClick={() => navigateTabs("next")}    
    >
          Next <FaArrowRight className="ms-2" />
        </Button>
      </div>
    </>
  );
};

export default BaseFooter;
