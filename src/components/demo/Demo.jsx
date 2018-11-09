/**
 * 案例Demo
 */
import React from 'react';
import { Button } from 'antd';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '这是一个Demo页面'
        }

        // 初始化事件
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('跳转了');
        var _obj = {
            id: 12,
            name: 'zhangsan',
            ackl: [
                {id: 8, title: '语文'},
                {id: 9, title: '数据'}
            ]
        }
        this.props.history.push(`/main/cssModule/${encodeURIComponent(JSON.stringify(_obj))}`);
    }

    componentWillUnmount() {
        console.log('即将跳转');
    }

    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <Button type="primary" onClick={this.handleClick}>点击跳转</Button>
            </div>
        )
    }
}

export default Demo;