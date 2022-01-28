import React from 'react';
import { useDispatch } from 'react-redux';
import { multiply } from '../redux/actions/actionTypes'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './multiply.css'

export default function Multiply() {
  const dispatch = useDispatch();
  
  return (
    <div className='multiply'>
      <Button style={{background: 'green'}} className='size' onClick={() => dispatch(multiply(2))}>*</Button>
    </div>
  )
}
