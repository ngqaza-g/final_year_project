import React from 'react';
import Form from './Report/Form';


export default function Report({id, name, role, user_id}){

return  <Form
        id = {id}
        name = {name}
        role={role}
        user_id = {user_id}
        type="nursing"
    />
}