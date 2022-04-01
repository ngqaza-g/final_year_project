import React from 'react';
import Form from './Report/Form';

export default function Discharge({id}){
    return (
        <Form
            id = {id}
            type="discharge"
        />
    );
}