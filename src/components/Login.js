import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import './Authorisation.css'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, loginWithGoogle, currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch(error){
            console.log(error);
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    async function handleSubmitWithGoogle() {
        try {
            setError('')
            setLoading(true)
            loginWithGoogle()
            history.push("/")
        } catch(error){
            console.log(error);
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return (
        
            <div className="authorisation-hero">
            <Card className="authorisation-card">
                <Card.Body>
                    <h2 className="text-center mb-3">Авторизоваться</h2>

                    {currentUser ? (<div>
                    <p>{currentUser.email}, ты так то уже авторизован</p>
                    <Button onClick={logout} disabled={loading} className="w-100 btn-danger">Выйти из аккаунта</Button>
                    </div>) : (<></>)}


                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Пороль ёпта</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 btn-warning" type="submit">Войти по Email</Button>
                    </Form>
                        <Button onClick={handleSubmitWithGoogle} disabled={loading} className="w-100 btn-warning" type="submit">Войти с помощью Google</Button>
                    <div className="w-100 text-center mt-3">
                        <Link to='/forgot-password'>Забыль пороль?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Desperate for an account? <Link to="/signup">Зарегать свою морду у меня на сайте</Link>
            </div>
            </div>

    );
};

export default Login;