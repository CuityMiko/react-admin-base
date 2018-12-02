import React, {Component} from 'react'

export default class MemberAnalysis extends Component {
    state = {
        title: '会员分析'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}