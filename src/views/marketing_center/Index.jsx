import React, {Component} from 'react'

export default class MarketingCenter extends Component {
    state = {
        title: '营销中心'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}