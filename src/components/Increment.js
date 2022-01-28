import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/actions/actionTypes'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './increment.css'

export default function Increment() {
  const dispatch = useDispatch();
  
  return (
    <div className='increment'>
      <Button className='size' type="primary" onClick={() => dispatch(increment(1))}>+</Button>
    </div>
  )

}
