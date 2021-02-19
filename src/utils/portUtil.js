/*
 * @Author: duchengdong
 * @Date: 2021-02-18 18:54:46
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-18 19:22:16
 * @Description: 
 */

import {
    PORT_IN,
    PORT_OUT,
    PORT_EXEC,
    PORT_EXEC_NO,
    PORT_YES,
    PORT_NO,
    PORT_A,
    PORT_B,
    USER_INFO,
    USER_ATTR,
    GROUP_ATTR,
    AB_TEST
} from './constants'
export function getPortTipText(portType,unitType) {
    let tipText = '输出'
    if(portType==='inLeft'||portType==='inTop'){
        tipText = PORT_IN
    }else{
        switch (unitType) {
            case USER_INFO:
                portType==='outRight'?tipText = PORT_EXEC:tipText = PORT_EXEC_NO
                break;
            case USER_ATTR:
            case GROUP_ATTR:
                portType==='outRight'?tipText = PORT_YES:tipText = PORT_NO
                break;
            case AB_TEST:
                portType==='outRight'?tipText = PORT_A:tipText = PORT_B
                break;
            default:
                tipText = PORT_OUT;
                break;
        }
    }
    return tipText
}