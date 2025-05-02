import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogin from '../../asset/images/tiki_login.png'
import { Image } from "antd";


function SignUpPage() {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.53)', height: '100vh'
        }}>
            <div style={{
                display: 'flex', width: '800px', height: '445px', borderRadius: '6px', background: '#fff'
            }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tạo tài khoản</p>

                    <InputForm style={{ marginBottom: '10px' }}  placeholder="abc@gmail.com"/>
                    <InputForm placeholder="password" style={{ marginBottom: '10px' }}/>
                    <InputForm placeholder="comfirm password"/>

                    <ButtonComponent    
                        bordered={false}
                        size={40}
                        styleButton={{
                            width: '100%',
                            height: '48px',
                            border: 'none',
                            borderRadius: '4px',
                            background: 'rgb(255, 57, 69)',
                            margin: '26px 0 10px',
                        }}
                        textButton={'Đăng ký'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>
                    <q>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></q>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image src={imageLogin} alt="image login" preview={false} height={203} width={203}/>
                    <h4>Mua sắm tại LTTD</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignUpPage;