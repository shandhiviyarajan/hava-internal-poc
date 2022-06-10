import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

import { FormInput } from "shards-react";

const Login = () =>{

    const toViewer = () =>{
        window.location = '/viewer'
    }
    return (
        <>
            <Card style={{ maxWidth: "360px", margin:'auto'}}>
                <CardHeader>Login Card</CardHeader>
                <CardBody>

                    <CardTitle>Lorem Ipsum some text here</CardTitle>
                    <p>Enter username & password</p>
                    <FormInput placeholder="Username or Email address" />;
                    <FormInput placeholder="Password" />;
                    <p>
                        &nbsp;
                    </p>
                    <Button onClick={toViewer}>Login&rarr;</Button>
                </CardBody>
                <CardFooter>Forgot password</CardFooter>
            </Card>
        </>
    )
}

export default Login;
