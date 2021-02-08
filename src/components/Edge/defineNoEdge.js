/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:48:59
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 16:22:33
 * @Description: 
 */
import {
    Shape
} from '@antv/x6';
import configData from './config'
export default function defineNoEdge(currentNode) {
    // 根据当前操作节点的位置创建边
    let props = currentNode.prop()
    let position = props.position
    let dx = props.size.width
    let dy = props.size.height
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
        source: {
            cell: currentNode.id,
            port: currentNode.getPorts()[2].id
        },
        target: {
            x: position.x + dx * 0.5,
            y: position.y + dy + 100
        },
        data: {
            disable:false,
            type: 2,
            configData
        }
    })

    noEdge.setLabels({
        attrs: {
            text: {
                fill: configData[2].color,
                text: configData[2].text,
            },
        },
    })
    return noEdge
}