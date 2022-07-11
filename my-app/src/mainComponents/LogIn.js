import Form from "../subComponents/Form";
export default function LogIn() {
    return (
        <div className="login">
            <div className="login-first">
                <Form callback={true} />
            </div>
        </div>
    )
}