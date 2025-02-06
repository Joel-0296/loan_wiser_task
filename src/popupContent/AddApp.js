import React, { useState } from "react";
//popup
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

//tabs
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { AddDocsbutton, AddDocscontent } from "./AddDocs";

const AddApp = (props) => {
  const [dockey, setDocKey] = useState("");
  const [appkey, setAppKey] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [docname, setdocname] = useState("");
  const [docs, setDocs] = useState([]);
  const makedocName = (e) => {
    setdocname(e.target.value);
  };
  const createdoc = () => {
    setDocs((prevApps) => [
      ...prevApps,
      { appkeyval: appkey, dockeyval: docname },
    ]);
    setdocname("");
    setShow(false);
  };
  console.log(docs);
  console.log(appkey);
  return (
    <>
      {props.applist.length > 0 ? (        
        <Tabs
          // defaultActiveKey="profile"
          variant="pills"
          id="justify-tab-example"
          className="mb-3"
          justify
          activeKey={appkey}
          onSelect={(k) => setAppKey(k)}
        >
          {props.applist.map((aplist) => (
            <Tab eventKey={aplist} title={<span>{aplist}<Button onClick={(e)=> {
              e.isPropagationStopped();
              props.onRemoveTab(aplist);
            }} variant={'danger'}>x</Button></span>}>
              <Tab.Container
                id="app-tabs"
                // defaultActiveKey="first"
                activeKey={dockey}
                onSelect={(k) => setDocKey(k)}
              >
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      {docs.length > 0 ? (
                        docs
                          .filter((doclist) => doclist.appkeyval === appkey)
                          .map((doclist) => (
                            <AddDocsbutton ekey={doclist.dockeyval} />
                          ))
                      ) : (
                        <p></p>
                      )}
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      {docs.length > 0 ? (
                        docs
                          .filter((doclist) => doclist.appkeyval === appkey)
                          .map((doclist) => (
                            <AddDocscontent ekey={doclist.dockeyval} />
                          ))
                      ) : (
                        <p></p>
                      )}
                    </Tab.Content>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <button
                      className="btn btn-primary add"
                      onClick={handleShow}
                    >
                      Add Documentation
                    </button>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
          ))}
        </Tabs>        
      ) : (
        <p>add Application</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Documentation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            value={docname}
            onChange={makedocName}
            type="text"
            placeholder="name"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={createdoc}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddApp;
