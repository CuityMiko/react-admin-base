import React, {Component} from 'react'

export default class AuthorizeCenter extends Component {
    state = {
        title: '授权中心'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}