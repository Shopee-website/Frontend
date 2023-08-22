import React from "react";
import { Layout } from "antd";
import Header from 'components/header'
import Footer from 'components/footer'


function MainLayout(props) {
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