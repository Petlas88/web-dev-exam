import React, {useEffect, useState} from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import {RadialGradient} from "./common/RadialGradient";
import {SignLogo} from "./common/SignLogo";
import Sidebar from "./pages/Dashboard/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import {CogIcon, HeaderTop, Logo} from "./layouts/Header/style";
import {Link} from "react-router-dom";


const Layout = ({children}) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <React.Fragment>
            <HeaderTop><CogIcon as={Link} to={"/admin"}/><Logo/></HeaderTop>
            <Container fluid>
                <Row>
                    <Col xs={2} className={"sidebar-wrapper"}>
                        <Sidebar/>
                    </Col>
                    <Col xs={10} className={"page-content-wrapper "}>
                        <Card className={"mt-5"}>
                            {children}
                        </Card>

                    </Col>
                </Row>

            </Container>




        </React.Fragment>
    );
};

export default Layout;