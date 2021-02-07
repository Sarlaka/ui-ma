/*
 * @Author: duchengdong
 * @Date: 2021-02-01 12:10:13
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-05 17:41:24
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

/**
 * 五边形
 */
export const PentagonNodeSvg = Graph.registerNode('pentagon-node-svg', {
    inherit: 'polygon',
    width: 136,
    height: 124,
    attrs: {
        body: {
            stroke: 'none',
            strokeWidth: '1',
            fill: 'none',
            fillRule: 'evenodd',
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
        bodyPath: {
            d: 'M4,0 L100.629034,0 C102.09092,-2.68544075e-16 103.436367,0.797502599 104.138087,2.07996125 L134.823205,58.1599225 C136.132398,60.5525961 136.132398,63.4474039 134.823205,65.8400775 L104.138087,121.920039 C103.436367,123.202497 102.09092,124 100.629034,124 L4,124 C1.790861,124 -2.81511679e-14,122.209139 -2.84217094e-14,120 L-2.84217094e-14,4 C-2.91363401e-14,1.790861 1.790861,4.05812251e-16 4,0 Z',
        },
        bodyg1: {
            fill: '#5BC9A4',
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
        fo: {
            width: 110,
            height: 124
        },
        icon: {
            class: 'icon-shape',
            src: './assets/shapeIcon/user.png',
        },
        name: {
            class: 'node-name',
            innerText: '2222'
        }
    },
    
    markup: [
        {
            tagName: 'g',
            selector: 'body',
            children: [
                {
                    tagName: 'g',
                    selector: 'bodyg1',
                    children: [
                        {
                            tagName: 'path',
                            selector: 'bodyPath',
                        },
                    ]
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
                children: [{
                    tagName: 'img',
                    selector: 'icon'
                },{
                    tagName: 'div',
                    selector: 'name',
                    textContent: '111'
                }]
            }, ],
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