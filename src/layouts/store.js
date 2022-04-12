import {observable, action} from "mobx";

class LayoutStore {
	@observable openKeys = [];
	@observable selectedKeys = [];

	// 点击改变 openKeys
	@action onOpenChange = (openKeys) => {
		this.openKeys = openKeys;
	};

	// 菜单激活
	@action activeNavs = (data, url) => {
		return data.map((item) => {
			if (item.children) {
				return item.children.filter((item1) => !item1.hidden && url.indexOf(item1.key || item1.path) !== -1);
			}
			return false;
		});
	};

	// 页面跳转, 重新改变 openKeys, selectedKeys,
	@action init(menuConfig, url) {
		let condition = url === "/";
        const openUrl = condition ? 'home/list' : url;
        this.openKeys = [`/${openUrl.split("/")[1]}`];
		if (condition) {
			this.selectedKeys = ['home/list'];
		} else {
			this.activeNavs(menuConfig, url).map((item) => {
				if (item.length > 0) {
					this.selectedKeys = [item[0].path];
				}
				return false;
			});
		}
    }

    // 修改title
	@action changeDocTitle(menuConfig, url) {
		return menuConfig.map((item) => {
			if (item.children) {
				return item.children.map((item1) => {
                    const path = item1.path.split(':')[0];
					if (url.indexOf(path) !== -1) {
						document.title = item1.title;
						return true;
					}
					return false;
				});
			} else {
				if (url.indexOf(item.path) !== -1) {
					document.title = item.title;
					return true;
				}
				return false;
			}
		});
	}
}

const layoutStore = new LayoutStore();
export default layoutStore;
