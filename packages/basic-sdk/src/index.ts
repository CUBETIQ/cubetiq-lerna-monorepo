import { NAME, VERSION, HELLO } from '@cubetiq/base-sdk';

const hello = () => {
    return 'Hello World!';
}

console.log("Say Hello =>", hello());

const name = NAME();
const version = VERSION();

console.log("Base SDK =>", HELLO);
console.log("Base SDK Name =>", name);
console.log("Base SDK Version =>", version);