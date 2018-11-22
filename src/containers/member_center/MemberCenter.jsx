import React, {Component} from 'react'

export default class MemberCenter extends Component {
    state = {
        title: '会员中心'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}