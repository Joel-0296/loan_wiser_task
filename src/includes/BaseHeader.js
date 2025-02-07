import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import AddApp from '../popupContent/AddApp';

const BaseHeader = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);     
    const [appname, setAppname] = useState("");
    const [apps, setApps] = useState([]);        
    const makeappName = (e) => {
        setAppname(e.target.value);        
    };
    const createApp = () => {        
        setApps(prevApps => [...prevApps, appname]);
        setAppname("");
        setShow(false);
    };
    const onRemoveTab = (ekey) => {        
        setApps(apps => apps.filter(app => app !== ekey));
    };     
  return (
    <div>
        <div class='d-flex justify-content-between align-items-center'>
            <h1>Document Upload</h1>        
            <Button className='btn btn-primary add' onClick={handleShow}>Add Application</Button>
        </div>
                
        <AddApp applist={apps} onRemoveTab={onRemoveTab}/>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form.Control value={appname} onChange={makeappName} type="text" placeholder="name" />
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={createApp}>Save</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default BaseHeader