import React from "react";
import { Layout } from "antd";
import Header from 'components/header'
import Footer from 'components/footer'

// const headerFixed = ['HomePage'];

function MainLayout(props) {

    // let positionHeader = 'fixed';

    // if (!headerFixed.includes(String(props.component))) {
    //     console.log(props.component);
    //     positionHeader = 'status';
    // }

    return (
        <div className="body-wrapper">
            <div className="content-wrapper">
                <Layout className="main-layout">
     
                    <Layout className="main-layout_content">
                        <Header className="main-layout_content_header" />
                        <div className="main-layout_content_main">
                            <div className="main-layout_content_main_component">
                                <props.component />
                            </div>
                        </div>
                        <Footer />
                    </Layout>
                    
                </Layout>

            </div>

        </div>
    )
}

export default MainLayout;