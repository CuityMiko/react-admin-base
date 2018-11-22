import React, {Component} from 'react'

export default class OiltationManage extends Component {
    state = {
        title: '油站管理'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}