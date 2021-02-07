/*
 * @Author: duchengdong
 * @Date: 2021-02-01 12:10:13
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-03 16:52:51
 * @Description: 
 */
import {
    Graph,
    Shape,
    Dom
} from '@antv/x6'

const {
    Rect,
    Circle
} = Shape

export const CustomerEventNodeSvg = Graph.registerNode('customer-event-node-svg', {
    inherit: 'polygon',
    width: 138,
    height: 138,
    attrs: {
        body: {
            stroke: 0,
            fill: '#5BC9A4',
            points: '0,59 0,79 59,138 79,138 138,79 138,59 79,0 59,0',
            filter: {
                name: 'dropShadow',
                args: {
                    color: '#5BC9A4',
                    dx: 0,
                    dy: 10,
                    blur: 8,
                    opacity: 0.4
                }
            }
        },
        btn: {
            refX: '100%',
            refX2: -28,
            y: 4,
            width: 24,
            height: 18,
            rx: 10,
            ry: 10,
            fill: 'rgba(255,255,0,0.01)',
            stroke: 'red',
            cursor: 'pointer',
            event: 'node:delete',
            visibility: 'visible'
        },
        pathOuter: {
            transform: 'translate(53,25)'
        },
        iconPath: {
            fill: 'white',
        },
    },
    markup: [{
        tagName: 'polygon',
        selector: 'body',
    },
    {
        tagName: 'g',
        selector: 'pathOuter',
        children: [
            {
                tagName: 'path',
                selector: 'iconPath',
            }
        ]
    },
    {
        tagName: 'text',
        selector: 'text',
    },
    {
        tagName: 'rect',
        selector: 'btn',
    },
    {
        tagName: 'foreignObject',
        selector: 'fo',
        children: [{
            ns: Dom.ns.xhtml,
            tagName: 'body',
            selector: 'foBody',
        },],
    },
    ],
    ports: {
        groups: {
            top: {
                position: 'top',
                attrs: {
                    circle: {
                        r: 3,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            right: {
                position: 'right',
                attrs: {
                    circle: {
                        r: 3,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            bottom: {
                position: 'bottom',
                attrs: {
                    circle: {
                        r: 3,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            left: {
                position: 'left',
                attrs: {
                    circle: {
                        r: 3,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
        },
        items: [{
            group: 'top',
        },
        {
            group: 'right',
        },
        {
            group: 'bottom',
        },
        {
            group: 'left',
        },
        ],
    },
})