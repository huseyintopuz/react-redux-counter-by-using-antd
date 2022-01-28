import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/actions/actionTypes'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './decrement.css'

export default function Decrement() {
    const dispatch = useDispatch();

    return (
        <div className='decrement'>
            <Button className='size' type='danger' onClick={() => dispatch(decrement(1))}>-</Button>
        </div>
        )
}
