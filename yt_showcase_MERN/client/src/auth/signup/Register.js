import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router"

export default function Register(){
    const navigate = useNavigate()

    return <div className="sign_up_container d-flex justify-content-center align-items-center">
        <div className="card sign_up_card">
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={""} placeholder={"Username"} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={""}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" value={""}/>
                </Form.Group>
                <div className="mt-3 d-flex justify-content-between">
                    <Button variant="primary" onClick={()=>navigate(-1)}>Back </Button>
                    <Button variant="primary">Submit</Button>
                </div>
            </Form>
        </div>
    </div>
}