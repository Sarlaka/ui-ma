/*
 * @Author: duchengdong
 * @Date: 2021-02-08 15:58:17
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-18 13:56:55
 * @Description: 
 */
const COLOR = '#B9BCC5'
const DISABLE_COLOR = '#B9BCC5'
const DISABLE_TEXT = '已禁用'
const NO_COLOR = '#F16272'
const NO_TEXT = 'no'
const YES_COLOR = '#4173FF'
const YES_TEXT = 'yes'

// type: 
// 0： 正常 
// 1： yes true 可执行 A
// 2： no false 不可执行 B
export default {
    DISABLE_COLOR,
    DISABLE_TEXT,
    0: {
        color: COLOR,
        text: ''
    },
    1: {
        color: YES_COLOR,
        text: YES_TEXT
    },
    2: {
        color: NO_COLOR,
        text: NO_TEXT
    }
}