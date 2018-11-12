/**
 *
 * 添加注释
 *  on 2018/1/12
 *
 */
import React, { Component } from 'react';
import { Col, Card, Row } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import styles from './index.module.less';
import qs from 'qs'

class Cssmodule extends Component {
    componentDidMount() {
        // console.log(JSON.stringify(this.props.location))
        console.log(qs.parse(this.props.location.search.slice(1)).id)
        // var _objstr = this.props.match.params.id;
        // console.log(JSON.parse(decodeURIComponent(_objstr)), 'params');
        
    }

    render() {
        return (
            <div>
                <BreadcrumbCustom first="cssModule" />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="cssModule" bordered={false}>
                            <div className={styles.header}>
                                <p>Hello CssModule</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cssmodule;