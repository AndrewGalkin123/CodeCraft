import React, { useState } from 'react';
import './App.css';
import { Row, Col } from "antd"
import Header from './components/Header';
import _Menu from './components/Menu';
import content from './content';
import Description from './components/Description';

const App = () => {
  const methods = content.map(item => item.method);
  const descriptions = content.map(item => item.description);
  const examples = content.map(item => item.examples)
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const [description, setDescription] = useState(descriptions[0]);
  const [example, setExample] = useState(examples[0]);

  const handleMenuSelect = (selectedMethod) => {
    const index = methods.indexOf(selectedMethod);
    setSelectedMethod(selectedMethod);
    setDescription(descriptions[index]);
    setExample(examples[index])
  };

  return (
    <div>
      <Header title="CodeCraft" />
      <Row>
        <Col xs={10} md={3}>
          <_Menu methods={methods} onSelect={handleMenuSelect} />
        </Col>
        <Col xs={14} md={21}>
          <Description example={example} title={selectedMethod} description={description} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
