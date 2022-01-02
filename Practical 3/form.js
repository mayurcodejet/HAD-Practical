import React, { Component } from "react";

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => { 
        this.setState({
            comments: event.target.value
        })
    }

    handleTopiChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        const newLocal = "}  ${this.state.comments} ${this.state.topic}`)";
        alert(`${this.state.usernamenewLocal
        event.preventDefault()
    }
    render() {
        const {username, comments, topic } = this.state
        return(
            <form onSumbit={this.handleSubmit}>
            <div>
            <label>Username</label>
            <input  type='text' value={username}
            onChange={this.handleUsernameChange}/>
            </div>

            <div>
            <label>Comments</label>
            <textarea>value={comments}
            onChange={this.handleCommentsChange}</textarea>
            </div>

            <div>
            <label> Topic </label>
            <select value={topic} onChange={this.handleTopiChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            </select>
            </div>
            <button value="submit'>Submit</button>
            </form>
        )
    }
}

export default Form;