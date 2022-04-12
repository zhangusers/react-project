# SysIcon 组件

## 简介

字体/img Icon

## 属性介绍

属性        | 描述                               | 类型
-----------|------------------------------------|---
code       | 小图标字体                          | String
type       | 图标的展现类型                       | String: pop/popText/btn/default（Tooltip）
text       | 提示语                              | String
onClick    | 点击回调                            | Function()

## 代码演示

```javascript
import SysIcon from "@/components/SysIcon";

export default class TestPage extends Component {
    state = {};

    render() {
        return (
            <div>
                // 当存在code时
                <SysIcon code='' text=""/>
                // 当不存在code时
                <SysIcon text='text' >
                    <img src={src} alt="" width="18" className="sys-icon" />
                </SysIcon>
            </div>
        );
    }
}
```