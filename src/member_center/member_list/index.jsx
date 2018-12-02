import React, {Component} from 'react'
import { Tabs } from 'antd';

import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'

const TabPane = Tabs.TabPane;

export default class MemberList extends Component {
    state = {
        title: '会员列表'
    }

    handelChange = (key) => {
        console.log(key, 'handelChange');
    }

    render() {
        return (
            <div>
                <h3 className="mbr-list-title">{this.state.title}</h3>
                <Tabs defaultActiveKey="1" onChange={key => this.handelChange(key)} size="large">
                    <TabPane tab="Tab 1" key="1">
                        <Content1 key={1} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Content2 key={2} />
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <Content3 key={3} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}