import React from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import hulk from '../../assets/images/hulk.png'
import ironman from '../../assets/images/ironman.jpg'

export const Login = () => {
    const auth = useAuth();

    const sign_in = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };

    const sign_out = async () => {
        await auth.signOut()
    }

    return (
        <Container>
            <AuthCheck fallback={
                <Row>
                    <Col>
                        <h1 className="page-title">Sign In Here</h1>
                        <Button variant="secondary" onClick={sign_in}>
                            Sign In
                        </Button>
                    </Col>
                    <Col>
                        <img className="login-image" src={ironman} alt="ironman"/>
                    </Col>
                </Row>
                }>
                <Row>
                    <Col>
                        <h1 className="page-title">Log Out Here</h1>
                        <Button variant="danger" onClick={sign_out}>Sign Out</Button>
                    </Col>
                    <Col>
                        <img className="login-image" src={hulk} alt="hulk"/>
                    </Col>
                </Row>
            </AuthCheck>
        </Container>
    )
}