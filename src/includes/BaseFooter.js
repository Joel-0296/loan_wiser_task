import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BaseFooter = () => {
  return (
    <>
      <div class="d-flex justify-content-between align-items-center">
        <Button variant="primary">
          <FaArrowLeft className="me-2" /> Back
        </Button>
        <Button variant="primary">
          Next <FaArrowRight className="ms-2" />
        </Button>
      </div>
    </>
  );
};

export default BaseFooter;
