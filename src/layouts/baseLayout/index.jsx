import React, {Component} from "react";

import {Layout, Menu, Spin} from "antd";

import SysIcon from "@/components/SysIcon";

import {Link} from "react-router-dom";
import {sideRouter} from "@/router/menuConfig";

import {inject, observer} from "mobx-react";
import store from "../store.js";

const {Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

@inject("store")
@observer
class BaseLayout extends Component {
    constructor(props){
        super(props)
        this.globalStore = props.store.globalStore;
    }

	// 菜单渲染
	renderMenu = (data) => {
		return data.map((item) => {
            if (!item.hidden) {
                if (item.children) {
                    return (
                        <SubMenu key={item.path} icon={<SysIcon code={item.icon} />} title={item.title}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    );
                }
                return (
                    <Menu.Item key={item.path} icon={<SysIcon code={item.icon} />}>
                        <Link to={item.url || item.path}> {item.title} </Link>
                    </Menu.Item>
                );
            }
            return false;
        });
    };

	render() {
		return (
            <Layout>
                <Sider>
                    <Menu
                        mode="inline"
                        openKeys={store.openKeys} // 使用openKeys的原因是因为要根据浏览器前进后退按钮，来修改选中的openkeys
                        selectedKeys={store.selectedKeys} // 和openKeys同理
                        onOpenChange={store.onOpenChange}
                    >
                        {this.renderMenu(sideRouter)}
                    </Menu>
                </Sider>
                <Layout id="backTop">
                    <Content>
                        <Spin spinning={this.globalStore.loading}>
                            <div className="content">{this.props.children}</div>
                        </Spin>
                    </Content>
                </Layout>
            </Layout>
        );
	}
}

export default BaseLayout;
