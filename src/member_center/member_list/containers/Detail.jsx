import React, {Component} from 'react'

export default class DetailContainer extends Component {
    state = {
        title: '基本信息'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}