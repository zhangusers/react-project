import {lazy} from "react";

const sideRouter = [
        {
            title: "首页",
            path: "/home",
            icon: "iconrepair-order",
            children: [
                {
                    title: "首页内容",
                    path: "/home/list",
                    component: lazy(() => import("@/pages/home")),
                    exact: true,
                    authType: [54, 55],
                },
            ],
        },
        {
            title: "关于",
            path: "/about",
            icon: "iconrepair-order",
            children: [
                {
                    title: "关于我们",
                    path: "/about/us",
                    component: lazy(() => import("@/pages/about")),
                    exact: true,
                },
                {
                    title: "更多信息",
                    path: "/about/info",
                    component: lazy(() => import("@/pages/info")),
                    exact: true
                }
            ],
        },
        {
            title: "信息",
            path: "/info",
            icon: "iconrepair-order",
            children: [
                {
                    title: "更多信息",
                    path: "/info/more",
                    component: lazy(() => import("@/pages/info")),
                    exact: true
                }
            ]
        }
    ],
    otherRouter = [],
    routers = [
        ...otherRouter,
        {
            path: "/",
            component: lazy(() => import("@/layouts/baseLayout")),
            redirect: '/home/list',
            exact: true,
            children: [...sideRouter],
        },
    ];

export {routers, sideRouter, otherRouter};
