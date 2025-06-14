'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
require('../Title/index.js');
var Section$1 = require('./Section.scss.js');
var Flex = require('../../layout/Flex/Flex.js');
var Title = require('../Title/Title.js');

const useStyle = dom.style(Section$1["default"], { root: '' });
function Section(_a = {}) {
    var { title, titleProps, subtitle } = _a, props = tslib.__rest(_a, ["title", "titleProps", "subtitle"]);
    const { '': children, title: aside } = jsx.useSlots();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{element:'section',align:'stretch',vertical:true,gap:24,...props,class:() => styles.root},children:[{type:Title.Title,props:{h:2,justify:'between',align:'end',gap:16,...titleProps,subtitle:subtitle,title:title,class:() => styles.title},children:[aside]},children]});
}

exports.Section = Section;
