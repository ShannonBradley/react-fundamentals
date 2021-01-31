import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
            <Col xs="12">
             <h1>Functional Component</h1>
             <p>Functional components are the primary tool in React to build a small, modular piece of your page..</p>
             <dl>
                 <dt>Can use state</dt>
                 <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                 <dt>No 'this' keyword</dt>
                 <dd>Older class components use 'this', but functional components have no 'this' object.</dd>
                 <dt>Can use effects</dt>
                 <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                 <dt>return()</dt>
                 <dd>Must return a single element, but this element may have nested elements inside.</dd>
             </dl>
             </Col>
             </Row>
             <hr/>
             <h2>Challenge</h2>
             <Row>
                 <Col md="6">
                     <HelloWorldFatArrow className="logo"/>
                     </Col>
                     <Col md="6">
                         <HelloWorld/>        
                 </Col>
             </Row>
        </Container>
        
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            Regular Function
          </ToastHeader>
          <ToastBody>
            const HelloWorld = function()
          </ToastBody>
        </Toast>
      </div>
    )
};

const HelloWorldFatArrow = () =>
<div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            Fat Arrow Function
          </ToastHeader>
          <ToastBody>
            const HelloWorld = () =>
          </ToastBody>
        </Toast>
      </div>
