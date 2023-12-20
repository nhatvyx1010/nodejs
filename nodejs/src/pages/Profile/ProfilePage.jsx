import React, { useState } from "react";
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from './style';
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

const ProfilePage = () => {
    const {email, setEmail} = useState('')
    const handleOnchangeEmail = () => {

    }
    const handleUpdate = () => {

    }
    return(
        <div style={{width: '1270px', margin: '0 auto', height: '500px'}}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLabel htmlFor="email">Email</WrapperLabel>
                    <InputForm style={{width: '300px'}} id="email" value={email} onChange={handleOnchangeEmail} />
                    <ButtonComponent 
                        onClick={handleUpdate}
                        size={40} 
                        styleButton={{ height: '30px', width: 'fit-content', border: '1px solid #84D9BA', borderRadius: '4px', padding: '2px 6px 6px'}} 
                        textButton={'Cập nhật'}
                        styleTextButton={{color: '#84D9BA', fontSize: '15px', fontWeight: '700'}}>
                    </ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                    <WrapperLabel htmlFor="email">Email</WrapperLabel>
                    <InputForm style={{width: '300px'}} id="email" value={email} onChange={handleOnchangeEmail} />
                    <ButtonComponent 
                        onClick={handleUpdate}
                        size={40} 
                        styleButton={{ height: '30px', width: 'fit-content', border: '1px solid #84D9BA', borderRadius: '4px', padding: '2px 6px 6px'}} 
                        textButton={'Cập nhật'}
                        styleTextButton={{color: '#84D9BA', fontSize: '15px', fontWeight: '700'}}>
                    </ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                    <WrapperLabel htmlFor="email">Email</WrapperLabel>
                    <InputForm style={{width: '300px'}} id="email" value={email} onChange={handleOnchangeEmail} />
                    <ButtonComponent 
                        onClick={handleUpdate}
                        size={40} 
                        styleButton={{ height: '30px', width: 'fit-content', border: '1px solid #84D9BA', borderRadius: '4px', padding: '2px 6px 6px'}} 
                        textButton={'Cập nhật'}
                        styleTextButton={{color: '#84D9BA', fontSize: '15px', fontWeight: '700'}}>
                    </ButtonComponent>
                </WrapperInput>
            </WrapperContentProfile>
        </div>
    )
}

export default ProfilePage