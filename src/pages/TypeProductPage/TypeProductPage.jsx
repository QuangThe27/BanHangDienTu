import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNabar, WrapperProducts } from "./style";

function TypeProductPage() {
    const onChange = () => {

    }

    return (
        <div style={{width: '100%', background: '#efefef'}}>
            <div style={{width: '1270px', margin: '0 auto'}}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNabar span={4}>
                        <NavbarComponent />
                    </WrapperNabar>

                    <Col span={20}>
                        <WrapperProducts span={20}>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>

                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{
                            justifyContent: 'center', marginTop: '10px'
                        }}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default TypeProductPage;