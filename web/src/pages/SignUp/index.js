import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/airbnb_logo.png";

import { Form, Container } from "./styles.js";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    };
    handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
    };
    render(){
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="Airbnb logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => this.setState({email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({password: e.target.value })}
                    />
                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/">Fazer Login</Link>
                </Form>
            </Container>
        )
    }
}

export default SignUp;