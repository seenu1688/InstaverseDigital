import React from "react";
class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
        let postdata = {};
        postdata["firstname"] = this.state.input.firstname;
        postdata["lastname"] = this.state.input.lastname;
        postdata["email"] = this.state.input.email;
        postdata["phone"] = this.state.input.phone;
        postdata["message"] = this.state.input.message;
        //alert('Demo Form is submited');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postdata)
        };
        fetch('http://localhost:3000/user', requestOptions)
        .then(response => response.json())
        .then(data => {
            let input = {};
            input["firstname"] = "";
            input["lastname"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["message"] = "";
            this.setState({input:input});
                alert(data.result);
            });
        }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your name.";
    }else{
        errors["firstname"] = "";
    }
    if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
    }
    if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
        }
    }
    if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
    }
    if (typeof input["phone"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
            isValid = false;
            errors["phone"] = "Please enter only number.";
        } else if (input["phone"].length !== 10) {
            isValid = false;
            errors["phone"] = "Please enter valid phone number.";
        }
    }
    this.setState({
        errors: errors
    });
    return isValid;
}

  render() {
    return (
     <form className="contact-form" onSubmit={this.handleSubmit}>
        
        <input type="text" className="input" placeholder="Name" value={this.state.input.firstname} onChange={this.handleChange} name="firstname" />
        <input type="text" className="input" placeholder="LastName" value={this.state.input.lastname} onChange={this.handleChange} name="lastname"/>
        <div className="text-danger">{this.state.errors.firstname}</div>

        <input type="email" className="input" placeholder="Email" value={this.state.input.email} onChange={this.handleChange} name="email" />
        <div className="text-danger">{this.state.errors.email}</div>

        <input type="phone" maxLength="10" className="input" placeholder="Phone" value={this.state.input.phone} onChange={this.handleChange} name="phone" />
        <div className="text-danger">{this.state.errors.phone}</div>
        
        <textarea className="input" placeholder="Message" defaultValue={""} value={this.state.input.message} onChange={this.handleChange} name="message"/>

        <button className="main-btn">Send message</button>
    </form>
    );
  }
}

export default RegisterForm;