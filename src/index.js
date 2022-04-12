import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route} from "react-router-dom";

import {ConfigProvider} from "antd";

import App from "@/layouts";
import Empty from "@/components/Emptys";

import {Provider} from "mobx-react";
import * as Store from "./store";

ReactDOM.render(
    <ConfigProvider renderEmpty={() => <Empty />}>
        <Provider store={Store}>
            <BrowserRouter>
                <Route path="*" component={App} />
            </BrowserRouter>
        </Provider>
    </ConfigProvider>,
    document.getElementById("root")
);
