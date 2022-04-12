import React from "react";
import {Empty} from "antd";

export default function EmptyComponent(props) {
	const {desc, children, size = 60} = props;

	return (
		<Empty
			image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
			imageStyle={{height: size}}
			description={desc || "No Data"}
		>
			{children}
		</Empty>
	);
}
