import React, {Component} from "react";

import {Layout, Spin} from "antd";

import {otherRouter, sideRouter} from "@/router/menuConfig";
import RouterView from "@/router";

import {inject, observer} from "mobx-react";
import store from "./store.js";

import "../index.less";

@inject("store")
@observer
class Layouts extends Component {
	state = {
		isReady: false,
	};

	constructor(props) {
		super(props);
		const url = props.match.url;
		this.globalStore = props.store.globalStore;
        this.globalStore.history = props.history;
		this.init(url);
	}

	async componentDidMount() {
        this.setState({ isReady: true });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const url = this.props.match.url;
		if (this.props.match.url !== prevProps.match.url) {
			this.init(url);
		}
	}

	init(url) {
		store.init(sideRouter, url);
        store.changeDocTitle([...sideRouter, ...otherRouter], url);
	}

	render() {
        const {isReady} = this.state;

        return (
            (isReady && (
                <Layout className="layout">
                    <RouterView />
                </Layout>
            )) || (
                <Spin spinning={!isReady} tip="加载中...">
                    <div style={{height: "100vh"}}></div>
                </Spin>
            )
        );
	}
}

export default Layouts
