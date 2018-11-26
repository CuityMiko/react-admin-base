import React, {Component} from 'react'

export default class OilCard extends Component {
    state = {
        title: '加油卡'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}