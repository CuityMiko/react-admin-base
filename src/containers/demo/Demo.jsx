import React, {Component} from 'react'

export default class AuthorizeCenter extends Component {
    state = {
        title: 'Demo'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}