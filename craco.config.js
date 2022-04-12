const path = require("path");

const CracoLessPlugin = require("craco-less");

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

// 修改默认设置
module.exports = {
    webpack: {
        alias: {
            "@": pathResolve("./src")
        }
    },
    babel: {
        plugins: [
            ["import", {libraryName: "antd", style: true}],
            ["@babel/plugin-proposal-decorators", {legacy: true}]
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
                modifyLessRule: function (lessRule, _context) {
                    lessRule.use.push({
                        loader: require.resolve("style-resources-loader"),
                        options: {
                            patterns: [path.resolve(__dirname, "./src/assets/styles/variable.less"), /*path.resolve(__dirname, "./src/assets/styles/mixins.less")*/],
                        },
                    });
                    return lessRule;
                },
            },
        },
    ],
};
