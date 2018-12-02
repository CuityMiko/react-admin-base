import React, {Component} from 'react'

export default class ListContainer extends Component {
    state = {
        title: '会员列表'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}