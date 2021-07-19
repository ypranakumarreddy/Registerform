import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            Email:'',
            topic: 'react'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastnameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            Email: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.firstName} ${this.state.lastName}${this.state.Email} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { firstName, lastName,Email, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>firstName </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>lastName </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={this.handleLastnameChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={Email}
                        onChange={this.handleEmailChange}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        )
    }
}

export default Form