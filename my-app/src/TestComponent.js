import React, { Component } from 'react'
import MyComponent  from './TestComponent';

export default class TestComponent extends Component {

    state ={
        name : '',
        firstName : '',
        surName : ''
    }

    onSubmit =(event) =>{
        event.preventDefault()
        console.log(this.state);
    }

    changeHandler = event =>{
        const {target:{value , name}} = event;
        this.setState({[name] : value})
    }


    render() {      
        console.log('render');
          
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="firstName" type="text" value={this.state.firstName} placeholder="what's your name?" onChange={this.changeHandler}></input>
                    <input name="surName" type="text" value={this.state.surName} placeholder="and surname?" onChange={this.changeHandler}></input>
                    <button>Send</button>
                </form>
                <p className="fullname">{`${this.state.firstName} ${this.state.surName}`}</p>
            </div>
        )
    }
}
