/*
 * @Author: duchengdong
 * @Date: 2021-02-07 13:40:13
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 15:11:32
 * @Description: 
 */

import {
    Dom
} from '@antv/x6'
import {PORTS} from './config'

export default function createEventNode(graph,metaData) {
    return graph.createNode({
        shape: 'rect',
        width: 138,
        height: 138,
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
                d: "M0,78.9555223 L0,59.0444777 C1.03983038e-14,56.9227458 0.842854723,54.8879145 2.34314575,53.3876235 L53.3876235,2.34314575 C54.8879145,0.842854723 56.9227458,5.71882635e-15 59.0444777,0 L78.9555223,0 C81.0772542,2.09265262e-14 83.1120855,0.842854723 84.6123765,2.34314575 L135.656854,53.3876235 C137.157145,54.8879145 138,56.9227458 138,59.0444777 L138,78.9555223 C138,81.0772542 137.157145,83.1120855 135.656854,84.6123765 L84.6123765,135.656854 C83.1120855,137.157145 81.0772542,138 78.9555223,138 L59.0444777,138 C56.9227458,138 54.8879145,137.157145 53.3876235,135.656854 L2.34314575,84.6123765 C0.842854723,83.1120855 1.44706919e-14,81.0772542 0,78.9555223 Z",
            },
            fo: {
                width: 138,
                height: 138,
            },
            foBody: {
                style:{
                    paddingTop: '24px',
                },
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
                class: 'node-operator'
            },
            disabled: {
                class: 'node-disable hide',
                style: {
                    background: "url('./assets/shapeIcon/icon-event-node-disable.png') no-repeat center/cover"
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
                        textContent: metaData.title,
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