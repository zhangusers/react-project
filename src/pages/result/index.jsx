import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Result, Button} from "antd";
// css
import "./index.less";

export default class ResultPage extends Component {
    render() {
        const {status, replacePath} = this.props;

        return (
            <div className="result flex-ac">
                <Result
                    status={status || "404"}
                    title={status || "404"}
                    subTitle={status ? "Sorry, you are not authorized to access this page." : "Sorry, the page you visited does not exist."}
                    extra={
                        <Link to={replacePath || 'home/list'}>
                            <Button type="primary">Back Home</Button>
                        </Link>
                    }
                />
            </div>
        );
    }
}
