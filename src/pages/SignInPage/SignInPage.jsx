import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogin from '../../asset/images/tiki_login.png'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

function SignInPage() {
    const [isShowPassword, setIsShowPassword] = useState(false)

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
                  
                    <div style={{position: 'relative'}}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '8px',
                                right: '8px'
                            }}
                        >
                            {
                                isShowPassword ? ( <EyeFilled/> ) : ( <EyeInvisibleFilled/> )
                            }
                        </span>
                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"}/>
                    </div>

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
                        textButton={'Đăng nhập'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
                    <q>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></q>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image src={imageLogin} alt="image login" preview={false} height={203} width={203}/>
                    <h4>Mua sắm tại LTTD</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;