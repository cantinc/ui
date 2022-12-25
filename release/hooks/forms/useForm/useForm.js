'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const formContext = new jsx.Context();
function useForm() {
    return jsx.useContext(formContext);
}

exports.formContext = formContext;
exports.useForm = useForm;
