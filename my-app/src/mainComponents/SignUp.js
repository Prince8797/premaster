import Form from "../subComponents/Form";
import "./SignUp.css"
export default function SignUp() {
    return (
        <div className="signup">
            <div className="signup-first">
                <Form callback={false} />
            </div>
        </div>
    )
}