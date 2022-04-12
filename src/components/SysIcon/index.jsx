import React from "react";

import {Button, Popconfirm, Popover, Tooltip} from "antd";

import "./index.less";

export default (props) => {
    const {code, type, text, size, btnSize = "default", btnType, danger, ghost, className, onClick, placement, children} = props;
    const title = text ? text : null;
    const click = () => {onClick && onClick()};

    const icon =
        code ? (
            <i style={{fontSize: size}} className={`iconfont sys-icon ${className || ""} ${code} `} {...(onClick && !type && {onClick: () => click()})} />
        ) : (
            children
        );

	const types = {
        pop: (
            <Popconfirm
                trigger="hover"
                title={title}
                arrowPointAtCenter
                overlayClassName="pop-confirm-icon"
                placement={placement || "topRight"}
                onConfirm={() => click()}
            >
                {icon}
            </Popconfirm>
        ),
        popText: (
            <Popover placement={placement || "topRight"} arrowPointAtCenter content={title} overlayClassName="pop-sysicon">
                {icon}
            </Popover>
        ),
        btn: (
            <Button ghost={ghost} size={btnSize} type={btnType} danger={danger} className="flex-ac sys-icon-btn" onClick={() => click()}>
                {icon} {title}
            </Button>
        ),
        default: (
            <Tooltip arrowPointAtCenter placement={placement || "topLeft"} title={title}>
                {icon}
            </Tooltip>
        ),
    };

    return icon ? types[type] || types.default : null;
}
