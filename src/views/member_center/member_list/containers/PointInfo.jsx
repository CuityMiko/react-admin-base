import React, {Component} from 'react'

export default class PointInfoContainer extends Component {
    state = {
        title: '积分账户'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}