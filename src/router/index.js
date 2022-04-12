import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {routers} from "./menuConfig";
import {LoadingOutlined} from "@ant-design/icons";

const Result = lazy(() => import("@/pages/result"));

const renderLoading = (
	<div style={{ margin: "100px auto", textAlign: "center" }}>
		<LoadingOutlined />
	</div>
);

/**
 * @param {any[]} routers
 */
const renderRouters = (routers) => {
    return routers.map((router) => {
        if (router.children) {
            return router.component ? (
                <router.component key={router.path}>
                    <Switch>
                        {router.redirect && <Redirect exact from={router.path} to={router.redirect} />}
                        {renderRouters(router.children)}
                        <Route component={Result} />
                    </Switch>
                </router.component>
            ) : (
                renderRouters(router.children)
            );
        }
        return <Route exact={router.exact} key={router.path} path={router.path} component={router.component} />;
    });
}

const Routers = () => {
	return (
		<Suspense fallback={renderLoading}>
			<Switch>
				{renderRouters(routers)}
				<Route component={Result} />
			</Switch>
		</Suspense>
	);
}

export default Routers;
