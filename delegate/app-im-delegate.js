import {getIMHandlerFactory} from "../libs/im-sdk/im-factory";

export default class AppIMDelegate {
    constructor(app) {
        this._app = app;
    }

    onLaunch(options) {
        this.iIMHandler = getIMHandlerFactory;
    }

    onShow(options) {
      this.iIMHandler.createConnection({ options: { url: 'ws://192.168.11.84:8001'}});
    }

    onHide() {

    }

    getIMHandlerDelegate() {
        return this.iIMHandler;
    }
}