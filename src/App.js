import React from 'react';
import Counter from './components/Counter';
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Multiply from './components/Multiply'
import Divide from './components/Divide'
import Reset from './components/Reset';
import './App.css'
import { Row, Col } from 'antd';


function App() {
  return (
    <div className='component'>
      <Row>
        <Col xs={16}><Counter /></Col>
        <Col xs={8}><Reset /></Col>
      </Row>
      <Row gutter={[0, 32]}className='flex' justify='space-around'>
        <Col xs={9} sm={4}><Increment /></Col>
        <Col xs={9} sm={4}><Decrement /></Col>
        <Col xs={9} sm={4}><Multiply /></Col>
        <Col xs={9} sm={4}><Divide /></Col>
      </Row>
    </div>
  );
}

export default App;