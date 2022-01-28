import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/actions/actionTypes'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './reset.css'

export default function Reset() {
    const dispatch = useDispatch();
    return (
        <div className='reset'>
            <Button type='danger' className='size center' onClick={() => dispatch(reset())} >reset</Button>
        </div>
        )
}
