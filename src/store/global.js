import { action, observable } from 'mobx'

class GlobalStore {
    @observable language = "zh-CN";
    @observable loading = false;
    @observable history = null;
    @observable modal = {};
    @observable modalLoading = false;
    // 打开弹窗禁止页面滚动
    @action disScroll(visible) {
        const body = document.getElementById("backTop");
        if (visible) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflowY = "auto";
        }
    }
    // 关闭弹窗
    @action hideModal() {
        this.modalLoading = false;
        this.modal.visible = false;
        setTimeout(() => {
            this.modal = {};
        }, 200);
    }
}

const globalStore = new GlobalStore();
export default globalStore;
