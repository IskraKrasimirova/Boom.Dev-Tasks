import React from "react";
import { Card, Form, Input, Button } from "./form.js";

function LoginForm() {
    return (
        <Card>
            <Form>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Password"></Input>
                <Button>Submit</Button>
            </Form>
        </Card>
    );
}

export default LoginForm;