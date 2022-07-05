import Form from "../subComponents/Form";
import "./LogIn.css"
export default function LogIn() {
    return (
        <div className="login">
            <div className="login-first">
                <Form callback={true} />
            </div>
        </div>
    )
}