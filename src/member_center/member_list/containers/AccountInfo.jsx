import React, {Component} from 'react'

export default class AccountInfoContainer extends Component {
    state = {
        title: '储值账户'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}