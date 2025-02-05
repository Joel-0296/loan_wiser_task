import React,{useState,useRef} from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {Button, Stack} from 'react-bootstrap';
import { FaPlus, FaUpload, FaTimes } from 'react-icons/fa';

export const AddDocsbutton = (props) => {
  return (
    <>
    <Nav.Item>
        <Nav.Link eventKey={props.ekey}>{props.ekey}</Nav.Link>
    </Nav.Item>
    </>
  )
};

export const AddDocscontent = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // Reference for file input

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploading file: ${selectedFile.name}`);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input field
    }
  };

  return (
    <>
        <Tab.Pane eventKey={props.ekey}>{props.ekey}
    <div className="p-3 border rounded bg-light">
      <div className="d-flex gap-2 mb-3">
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {/* Choose button triggers file input */}
        <Button variant="primary" onClick={() => fileInputRef.current.click()}>
          <FaPlus className="me-2" /> Choose
        </Button>

        <Button
          variant="primary"
          disabled={!selectedFile}
          onClick={handleUpload}
        >
          <FaUpload className="me-2" /> Upload
        </Button>

        <Button
          variant="primary"
          disabled={!selectedFile}
          onClick={handleCancel}
        >
          <FaTimes className="me-2" /> Cancel
        </Button>
      </div>

      <div className="border p-3 text-muted text-center">
        {selectedFile ? (
          <div>
            <strong>File Name:</strong> {selectedFile.name} <br />
            <strong>File Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB
          </div>
        ) : (
          "Drag and Drop file here."
        )}
      </div>
    </div>
    </Tab.Pane>

      </>
  );
};