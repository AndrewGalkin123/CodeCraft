import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Col } from "antd"
import Header from './components/MainHeader';
import _Menu from './components/Menu';
import Description from './components/Description';
import AboutUs from './pages/AboutUs';
import content from './content';
import "./App.css"
import MoreInfo from './pages/MoreInfo';
import CoursesPage from './pages/Courses/CoursesPage';

const App = () => {
  const methods = content.map(item => item.method);
  const descriptions = content.map(item => item.description);
  const basicExamples = content.map(item => item.basicExample)
  const basicExampleResults = content.map(item => item.basicExampleResult)
  const syntaxes = content.map(item => item.syntax)
  const dynamicExamples = content.map(item => item.dynamicExample)
  const dynamicExampleResults = content.map(item => item.dynamicExampleResult)
  const [searchedMethods, setSearchedMethods] = useState(methods)
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const [description, setDescription] = useState(descriptions[0]);
  const [syntax, setSyntax] = useState(syntaxes[0]);
  const [basicExample, setBasicExample] = useState(basicExamples[0]);
  const [basicExampleResult, setBasicExampleResult] = useState(basicExampleResults[0]);
  const [dynamicExample, setDynamicExample] = useState(dynamicExamples[0]);
  const [dynamicExampleResult, setDynamicExampleResults] = useState(dynamicExampleResults[0]);

  const handleMenuSelect = (selectedMethod) => {
    const index = methods.indexOf(selectedMethod);
    setSelectedMethod(selectedMethod);
    setDescription(descriptions[index]);
    setBasicExample(basicExamples[index])
    setSyntax(syntaxes[index])
    setBasicExampleResult(basicExampleResults[index])
    setDynamicExample(dynamicExamples[index])
    setDynamicExampleResults(dynamicExampleResults[index])
  };

  const handleMenuSearch = (value) => {
    setSearchedMethods(methods.filter(method => method.includes(value.currentTarget.value)))
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <Header search={handleMenuSearch}/>
            <Row>
              <Col xs={10} md={3}>
                <_Menu methods={searchedMethods} onSelect={handleMenuSelect} />

              </Col>
              <Col xs={14} md={21}>
                <Description
                  syntax={syntax}
                  basicExample={basicExample}
                  title={selectedMethod}
                  description={description}
                  basicExampleResult={basicExampleResult}
                  dynamicExample={dynamicExample}
                  dynamicExampleResult={dynamicExampleResult}
                />
              </Col>
            </Row>
          </div>
        }>
        </Route>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/more-info' element={<MoreInfo />} />
        <Route path='/courses' element={<CoursesPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
