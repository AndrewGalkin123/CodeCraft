import './App.css';
import { Row, Col } from "antd"
import Header from './components/Header';
import _Menu from './components/Menu';
function App() {
  const methods = ["arr.pop()",
  "arr.push()",
  "arr.shift()",
  "arr.unshift()",
  "arr.slice(start, end)",
  "arr.splice(start, deleteCount, item1, ..., itemN)",
  "arr.concat(array1, array2, ..., arrayN)",
  "arr.indexOf(element)",
  "arr.lastIndexOf(element)",
  "arr.forEach(callback)",
  ]
  return (
    <div>
      <Header title="CodeCraft"></Header>

      <Row>
        <Col xs={10} md={3}>
          <_Menu methods={methods}></_Menu>
        </Col>
      </Row>



    </div>
  );
}

export default App;
