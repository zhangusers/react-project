# Empty 组件

## 简介

空状态时的展示占位图

## 属性介绍

其他属性参考 antd 文档

属性        | 描述                               | 类型
-----------|------------------------------------|---
desc       | 状态描述
size       | 展示的图片大小                       | number

## 代码演示

```javascript
import Empty from "@/components/Emptys";

export default class TestPage extends Component {
    state = {};

    render() {
        return (
            <div>
                <Emptys size={100} />
            </div>
        );
    }
}
```
