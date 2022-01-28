import React from 'react';
import { useDispatch } from 'react-redux';
import { divide } from '../redux/actions/actionTypes'
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function Divide() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button style={{background: 'yellow'}} className='size' onClick={() => dispatch(divide(2))}>/</Button>
    </div>
    )
}
