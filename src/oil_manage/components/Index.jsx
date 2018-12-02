import React, {Component} from 'react'

export default class OilManageComponent extends Component {
    state = {
        title: '油品管理-组件'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}