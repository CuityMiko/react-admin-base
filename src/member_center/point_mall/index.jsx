import React, {Component} from 'react'

export default class PointMall extends Component {
    state = {
        title: '积分商城'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}