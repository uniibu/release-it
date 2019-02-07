/** This file serves as a lodash alternative */
const mem = require('mem');
const defaults = require('lodash.defaults');
const defaultsDeep = require('lodash.defaultsdeep');
const get = require('lodash.get');
const pick = require('lodash.pick');

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
function lowerCase(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z_-])([_-]+)?/g, '$1 ').trim().toLowerCase()
}
function last(arr) {
  return arr[arr.length - 1];
}

function includes(haystack, needle) {
  return haystack.includes(needle);
}
function isString(str) {
  return typeof str === 'string'
}
function filter(arr, cond) {
  return arr.filter(cond);
}

function castArray(...args) {
  if (!args.length) {
    return [];
  }
  var value = args[0];
  return Array.isArray(value) ? value : [value]
}
function values(object){
  return Object.values(object)
}
function flatten(arr){
  return [].concat(...arr);
}
function compact(arr){
  return arr.filter(Boolean);
}
module.exports = {
  compact,
  flatten,
  values,
  castArray,
  pick,
  defaultsDeep,
  upperFirst,
  lowerCase,
  last,
  get,
  defaults,
  includes,
  isString,
  filter,
  memoize: mem
}