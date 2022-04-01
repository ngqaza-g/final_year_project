import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import updateForm from '../../modules/updateForm';
import changePassword from '../../modules/changePassword';
import Modal from './components/Modal/Modal.js'
import Text from './components/Form_componets/Text';

export default function ChangePassword(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [passwords, setPasswords] = useState({});

    const onChange = (e)=>{
        const {name, value} = e.target;
        updateForm(name, value, setPasswords);
    }

    const submit = async (e)=>{
        e.preventDefault();
        changePassword(passwords, setPasswords,setLoading, navigate, dispatch);
    }

    const body = <form onSubmit={submit} id = "change-password-form">
                    <Text
                        label = "Current Password:"
                        name = "current_password"
                        onChange = {onChange}
                        value = {passwords.current_password}
                        type = "password"
                    />

                    <Text
                        label = "New Password:"
                        name = "new_password"
                        onChange = {onChange}
                        value = {passwords.new_password}
                        type = "password"
                    />
                    {((passwords.current_password === passwords.new_password) && ((passwords.current_passowrd !== "") && (passwords.new_password !== ""))) ? <div className="alert alert-danger mt-2">Current password and New password are the same</div> : ""}
        

                    <Text
                        label = "Repeat New Password:"
                        name = "repeat_new_password"
                        onChange = {onChange}
                        value = {passwords.repeat_new_password}
                        type = "password"
                    />

                    {((passwords.repeat_new_password !== passwords.new_password) && ((passwords.new_passowrd !== "") && (passwords.repeat_new_password !== ""))) ? <div className="alert alert-danger mt-2">New Passwords dont match</div> : ""}

                </form>
        return(
            <Modal 
                title ="Change Password"
                body = {body}
                id = "change-password"
                save = {true}
                view = {null}
                toggleView = {null}
                form_id ="change-password-form"
                isDischarge = {true}
            />
        );
}