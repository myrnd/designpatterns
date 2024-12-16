const user = {
    name: 'Vivek'
}

const hanlder = {
    get(target, props) {
        // console.log(target, props);
        return target[props].toUpperCase();
    },

    set(target, props, value) {
        // console.log(target, props, value);
        return true;
    }
}

const userProxy = new Proxy(user, hanlder)

console.log(userProxy.name); // Vivek

userProxy.name = 'abc';

console.log(userProxy.name); // abc
