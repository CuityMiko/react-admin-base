import React, {Component} from 'react'

export default class DataCenter extends Component {
    state = {
        title: '数据中心'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}