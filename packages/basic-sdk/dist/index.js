"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_sdk_1 = require("@cubetiq/base-sdk");
const hello = () => {
    return 'Hello World!';
};
console.log("Say Hello =>", hello());
const name = (0, base_sdk_1.NAME)();
const version = (0, base_sdk_1.VERSION)();
console.log("Base SDK =>", base_sdk_1.HELLO);
console.log("Base SDK Name =>", name);
console.log("Base SDK Version =>", version);
//# sourceMappingURL=index.js.map