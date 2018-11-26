import React, {Component} from 'react'

export default class OilManage extends Component {
    state = {
        title: '油品管理'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}