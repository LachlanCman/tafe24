import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export function Signup ( Props  ) {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form>
                            <h2> sign up for an account</h2>
                            <Form.Group>
                                <Form.Label >Email </Form.Label>
                                    <Form.Control type ="email" placeholder="you@domain.com" className="my-3"></Form.Control>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"  placeholder ="minimum 6 characters" />
                                </Form.Group>
                                <Button type="submit" variant="primary" className="my-3 mx-auto d-block w-50" >Sign up</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}