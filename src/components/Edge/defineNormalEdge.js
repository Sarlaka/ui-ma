/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:28:41
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 16:09:18
 * @Description: 
 */
import {
    Shape
} from '@antv/x6';
import configData from './config'
export default function defineNormalEdge() {
    return new Shape.Edge({
        attrs: {
            line: {
                stroke: configData[0].color,
                strokeWidth: 1,
                targetMarker: {
                    name: 'classic',
                    size: 8,
                },
            },
        },
        router: {
            name: 'manhattan',
        },
        zIndex: 0,
        connector: 'rounded',
        data: {
            disable:false,
            type:0,
            configData
        }
    })
}