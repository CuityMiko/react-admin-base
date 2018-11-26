import React, {Component} from 'react'

export default class MarketingCenterComponent extends Component {
    state = {
        title: '营销中心-组件'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}