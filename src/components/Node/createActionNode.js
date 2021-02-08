/*
 * @Author: duchengdong
 * @Date: 2021-02-07 14:13:14
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 20:08:16
 * @Description: 
 */
/*
 * @Author: duchengdong
 * @Date: 2021-02-05 17:45:40
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-07 14:14:57
 * @Description: 
 */

import {
    Dom
} from '@antv/x6'
import {PORTS} from './config'

export default function createActionNode(graph,metaData) {
    return graph.createNode({
        shape: 'rect',
        width: 124,
        height: 124,
        attrs: {
            body: {
                class: 'node-area',
                stroke: 'none',
                strokeWidth: '1',
                fill: metaData.bodyFill,
                rx:8,
                filter: {
                    name: 'dropShadow',
                    args: {
                        color: metaData.bodyFill,
                        dx: 0,
                        dy: 10,
                        blur: 8,
                        opacity: 0.4
                    }
                }
            },
            fo: {
                width: 124,
                height: 124,
            },
            foBody: {
                event: 'node:contextmenu',
            },
            icon: {
                class: 'icon-shape',
                src: metaData.iconUrl
            },
            name: {
                class: 'node-name'
            },
            operator: {
                class: 'node-operator',
            },
            disabled: {
                class: 'node-disable hide',
                style: {
                    background: "url('./assets/shapeIcon/icon-action-node-disable.png') no-repeat center/cover"
                }
            }
        },
        markup: [{
                tagName: 'rect',
                selector: 'body',
            },
            {
                tagName: 'foreignObject',
                selector: 'fo',
                children: [{
                    ns: Dom.ns.xhtml,
                    tagName: 'body',
                    selector: 'foBody',
                    children: [{
                        tagName: 'img',
                        selector: 'icon'
                    }, {
                        tagName: 'div',
                        selector: 'name',
                        textContent: metaData.title
                    }, {
                        tagName: 'div',
                        selector: 'operator',
                        textContent: `${'未设置'}`,
                    },{
                        tagName: 'div',
                        selector: 'disabled',
                    }]
                }],
            },
        ],
        ports: PORTS,
        data: {
            metaData,
            disable: false 
        }
    })
}