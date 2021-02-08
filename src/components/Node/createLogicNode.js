/*
 * @Author: duchengdong
 * @Date: 2021-02-07 14:38:04
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 15:11:25
 * @Description: 
 */

import {
    Dom
} from '@antv/x6'
import {PORTS} from './config'

export default function createLogicNode(graph,metaData) {
    return graph.createNode({
        shape: 'rect',
        width: 144,
        height: 124,
        attrs: {
            body: {
                class: 'node-area',
                stroke: 'none',
                strokeWidth: '1',
                fill: metaData.bodyFill,
                fillRule: 'evenodd',
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
            bodyPath: {
                d: "M38.3748716,0 L105.701032,0 C107.125866,-1.82023526e-14 108.443134,0.757928479 109.159199,1.98975736 L142.832844,59.9176462 C143.554536,61.1591552 143.555337,62.6922587 142.83494,63.9345204 L109.158516,122.006632 C108.442989,123.240497 107.124577,124 105.698252,124 L38.3776529,124 C36.9526773,124 35.6353007,123.241922 34.919286,122.0099 L1.16949973,63.937793 C0.446571138,62.6938744 0.44737389,61.157542 1.17160201,59.9143796 L34.918607,1.9864868 C35.6351574,0.756503477 36.9513887,2.0378464e-15 38.3748716,0 Z"
            },
            fo: {
                width: 144,
                height: 124,
            },
            foBody: {
                event: 'node:contextmenu',
            },
            icon: {
                class: 'icon-shape',
                src: metaData.iconUrl,
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
                    background: "url('./assets/shapeIcon/icon-logic-node-disable.png') no-repeat center/cover"
                }
            }
        },
        markup: [{
                tagName: 'g',
                selector: 'body',
                children: [{
                    tagName: 'path',
                    selector: 'bodyPath',
                }]
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