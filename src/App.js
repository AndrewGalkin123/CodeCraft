import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Col } from "antd"
import Header from './components/MainHeader';
import _Menu from './components/Menu';
import Description from './components/Description';
import AboutUs from './pages/AboutUs';
import content from './content';
import "./App.css"


const App = () => {
  const methods = content.map(item => item.method);
  const descriptions = content.map(item => item.description);
  const examples = content.map(item => item.examples)
  const [searchedMethods, setSearchedMethods] = useState(methods)
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const [description, setDescription] = useState(descriptions[0]);
  const [example, setExample] = useState(examples[0]);

  const handleMenuSelect = (selectedMethod) => {
    const index = methods.indexOf(selectedMethod);
    setSelectedMethod(selectedMethod);
    setDescription(descriptions[index]);
    setExample(examples[index])

  };

  const handleMenuSearch = (value) => {
    setSearchedMethods(methods.filter(method => method.includes(value.currentTarget.value)))
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header search={handleMenuSearch} title="CodeCraft" />
            <Row>
              <Col xs={10} md={3}>
                <_Menu methods={searchedMethods} onSelect={handleMenuSelect} />

              </Col>
              <Col xs={14} md={21}>
                <Description example={example} title={selectedMethod} description={description} />
              </Col>
            </Row>
          </>
        }>
        </Route>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
