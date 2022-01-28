import React from 'react';
import { useSelector } from 'react-redux';
import './counter.css'
import { Row, Col } from 'antd';

export default function Counter() {
  const counter = useSelector(state => state.counter);

  return (
    <Row className='counter' align='center'>
      <Col xs={14} sm={{span:8, offset: 2}}><span>Counter</span></Col>
      <Col xs={2} sm={{span:4, offset:2}}><span>{counter}</span></Col>
    </Row>
  )
}
