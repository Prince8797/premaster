import Form from "./Form";
export default function LogIn() {
    return (
        <div className="register login">
            <div className="login-first">
                <Form callback={true} />
            </div>
        </div>
    )
}