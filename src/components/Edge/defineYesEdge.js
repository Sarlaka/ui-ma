/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:28:41
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-09 10:36:54
 * @Description: 
 */
import {
    Shape
} from '@antv/x6';
import configData from './config'
export default function defineYesEdge(currentNode) {
    // 根据当前操作节点的位置创建边
    let props = currentNode.prop()
    let position = props.position
    let dx = props.size.width
    let dy = props.size.height
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
        source: {
            cell: currentNode.id,
            port: currentNode.getPorts()[1].id
        },
        target: {
            x: position.x + dx + 100,
            y: position.y + dy * 0.5
        },
        data: {
            disable: false,
            type: 1,
            configData
        }
    })

    yesEdge.setLabels({
        attrs: {
            text: {
                fill: configData[1].color,
                text: configData[1].text,
            },
        },
    })
    return yesEdge
}