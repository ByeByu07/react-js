import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router"
import axios from "axios"
import { useReducer } from "react"

const ACTION = {
    EMAIL:"EMAIL",PASSWORD:"PASSWORD",PASSWORD_C:"PASSWORD_C"
}

const reducer = (state,action) => {
    switch(action.type){
        case ACTION.EMAIL:
            return {...state,email:action.value}
        case ACTION.PASSWORD:
            return {...state,password:action.value}
        case ACTION.PASSWORD_C:
            return {...state,password_c:action.value}
    }
}

const initValue = {
    email : "",
    password:"",
    password_c:""
}

export default function Register(){
    const navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer,initValue)

    const post = (e) => {
        axios.post("signup",state)
        e.preventDefault();
    }

    const funcDispatch = (type,e) => {
        dispatch({type,value:e.target.value})
    }

    return <div className="sign_up_container d-flex justify-content-center align-items-center">
        <div className="card sign_up_card">
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={state.email} onChange={(e)=>{funcDispatch(ACTION.EMAIL,e)}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={state.password} onChange={(e)=>{funcDispatch(ACTION.PASSWORD,e)}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" value={state.password_c} onChange={(e)=>{funcDispatch(ACTION.PASSWORD_C,e)}}/>
                </Form.Group>
                <div className="mt-3 d-flex justify-content-between">
                    <Button variant="primary" onClick={()=>navigate(-1)}>Back </Button>
                    <Button variant="primary" onClick={post}>Submit</Button>
                </div>
            </Form>
        </div>
    </div>
}