/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:48:59
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-19 13:59:25
 * @Description: 
 */
import {
    Shape
} from '@antv/x6';
import configData from './config'
import {
    USER_INFO,
    AB_TEST
} from 'utils/constants'
export default function defineNoEdge(type) {
    // 根据当前操作节点的位置创建边
    // let props = currentNode.prop()
    // let position = props.position
    // let dx = props.size.width
    // let dy = props.size.height
    let aText,bText
    if(type===USER_INFO){
        aText='可执行'
        bText='不可执行'
    }else if(type==AB_TEST){
        aText='a'
        bText='b'
    }
    const noEdge = new Shape.Edge({
        attrs: {
            line: {
                stroke: configData[2].color,
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
        // source: {
        //     cell: currentNode.id,
        //     port: currentNode.getPorts()[2].id
        // },
        // target: {
        //     x: position.x + dx * 0.5,
        //     y: position.y + dy + 100
        // },
        data: {
            disable:false,
            type: 2,
            configData: {
                ...configData,
                1: {
                    color: configData[1].color,
                    text: aText??configData[1].text
                },
                2: {
                    color: configData[2].color,
                    text: bText??configData[2].text
                }
            }
        }
    })

    noEdge.setLabels({
        attrs: {
            text: {
                fill: configData[2].color,
                text: bText??configData[2].text
            },
        },
    })
    return noEdge
}