import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import defaultTemplate from './renderMultipleDemo.html';

export default class RenderMultipleDemo extends LightningElement {
    selected = null;
    
    clickHandler(event){
        this.selected = event.target.label                                      // if label got sign up it will render to sign up

    }

    render() {
        // work with ternary ( condition ? true: false )
        return this.selected === 'Sign Up' ? signUpTemplate: 
        this.selected === 'Sign In' ? signInTemplate:
        defaultTemplate
    }


// after clicking sing in and sign up so will see output on console 
    submitHandler(event){
        if (event.target.label === 'Sign In') {
            console.log("Sign In Successfully")
        }else if(event.target.label === 'Sign Up'){
            console.log("Sign Up Successfully")
        }else(
            console.log("Choose the correct one")
        )
    }
}