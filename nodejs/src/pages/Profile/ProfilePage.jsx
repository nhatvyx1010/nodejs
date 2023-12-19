import React, { useState } from "react";
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from './style';
import InputForm from "../../components/InputForm/InputForm";

const ProfilePage = () => {
    const {email, setEmail} = useState('')
    const handleOnchangeEmail = () => {

    }

    return(
        <div style={{width: '1270px', margin: '0 auto', height: '500px'}}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLabel>Email</WrapperLabel>
                    <InputForm style={{width: '300px'}} value={email} onChange={handleOnchangeEmail} />
                </WrapperInput>
            </WrapperContentProfile>
        </div>
    )
}

export default ProfilePage