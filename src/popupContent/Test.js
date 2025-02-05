import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { FaTimes } from 'react-icons/fa';

function Test() {
  const [key, setKey] = useState('home');
  const [tabs, setTabs] = useState([
    { eventKey: 'home', title: 'Home', content: 'Tab content for Home' },
    { eventKey: 'profile', title: 'Profile', content: 'Tab content for Profile' },
    { eventKey: 'contact', title: 'Contact', content: 'Tab content for Contact' }
  ]);

  const handleClose = (eventKey) => {
    setTabs(tabs.filter(tab => tab.eventKey !== eventKey));

    // If the closed tab was active, switch to another available tab
    if (key === eventKey && tabs.length > 1) {
      setKey(tabs.find(tab => tab.eventKey !== eventKey)?.eventKey || '');
    }
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.eventKey}
          eventKey={tab.eventKey}
          title={
            <span>
              {tab.title}{' '}
              <Button
                variant="link"
                size="sm"
                className="p-0 ms-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose(tab.eventKey);
                }}
              >
                <FaTimes />
              </Button>
            </span>
          }
        >
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}

export default Test;
