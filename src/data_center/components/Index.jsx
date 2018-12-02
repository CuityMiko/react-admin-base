import React, {Component} from 'react'

export default class DataCenterComponent extends Component {
    state = {
        title: '数据中心-组件'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}