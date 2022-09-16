import { makeRequest } from "./service/http";
const packageJson = require("../package.json");

export const VERSION = () => {
    return packageJson.version;
};

export const NAME = () => {
    return packageJson.name;
};

export const HELLO: string = "@@@HELLO WORLD@@@";

export {
    makeRequest,
}