/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:28:41
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-19 13:58:49
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
export default function defineYesEdge(type) {
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
    const yesEdge = new Shape.Edge({
        attrs: {
            line: {
                stroke: configData[1].color,
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
        //     port: currentNode.getPorts()[1].id
        // },
        // target: {
        //     x: position.x + dx + 100,
        //     y: position.y + dy * 0.5
        // },
        data: {
            disable: false,
            type: 1,
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

    yesEdge.setLabels({
        attrs: {
            text: {
                fill: configData[1].color,
                text: aText??configData[1].text
            },
        },
    })
    return yesEdge
}