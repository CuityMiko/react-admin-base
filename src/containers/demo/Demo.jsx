/**
 * 案例Demo
 */
import React from 'react';
import { Button } from 'antd';
import qs from 'qs'

import BreadcrumbCustom from '../../components/common/BreadcrumbCustom';

class Demo extends React.Component {
    state = {
        title: '这是一个Demo页面'
    }

    componentDidMount() {
        // console.log(qs.parse(this.props.location.search.slice(1)).id)
        // var _objstr = this.props.match.params.id;
    }

    componentWillUnmount() {
        console.log('即将跳转');
    }

    handleClick= () => {
        console.log('跳转了');
        // var _obj = {
        //     id: 12,
        //     name: 'zhangsan',
        //     ackl: [
        //         {id: 8, title: '语文'},
        //         {id: 9, title: '数据'}
        //     ]
        // }
        // this.props.history.push({
        //     pathname: '/main/cssModule',
        //     query: {
        //         id: 123,
        //         name: 'zhangsan'
        //     }
        // });
        this.props.history.push('/main/cssModule?id=123&mid=456');
        // this.props.history.push(`/main/cssModule/${encodeURIComponent(JSON.stringify(_obj))}`);
    }

    render() {
        return (
            <div>
                <BreadcrumbCustom first="demo" />
                <p>{this.state.title}</p>
                <Button type="primary" onClick={this.handleClick}>点击跳转</Button>
            </div>
        )
    }
}

export default Demo;