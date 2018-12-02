import React, { Component } from 'react';
import { Layout, notification, Icon } from 'antd';
import SiderCustom from '@/common/components/menu/SiderCustom';
import HeaderCustom from '@/common/components/header/HeaderCustom';
import { receiveData } from '@/base/redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routers from '@/base/routes/router';
import routes from '@/base/routes/route';

const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
        }
    }
    componentDidMount() {
        const openNotification = () => {
            notification.open({
              message: '欢迎光临',
              description: (
                  <div>
                      <p>
                        欢迎进入油站后台管理管理系统
                      </p>
                  </div>
              ),
              icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
              duration: 0,
            });
            localStorage.setItem('isFirst', JSON.stringify(true));
        };
        const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        !isFirst && openNotification();
    }
    getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
        const { receiveData } = this.props;
        const clientWidth = window.innerWidth;
        console.log(clientWidth);
        receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { auth, responsive } = this.props;
        return (
            <Layout>
                {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} menus={routes.menus}/>}
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                    <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                        <Routers auth={auth} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    oilStation-manage-frontend ©{new Date().getFullYear()} Created by CJ-FE
                    </Footer>
                </Layout>
                
                {
                    // 手机端对滚动很慢的处理
                    responsive.data.isMobile && (
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
