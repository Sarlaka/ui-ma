/*
 * @Author: duchengdong
 * @Date: 2021-02-05 17:45:40
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-07 20:28:13
 * @Description: 
 */

import {
    Dom
} from '@antv/x6'

export default function createUserNode(graph,metaData) {
    console.log(metaData)
    return graph.createNode({
        shape: 'rect',
        width: 136,
        height: 124,
        attrs: {
            body: {
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
                d: 'M4,0 L100.629034,0 C102.09092,-2.68544075e-16 103.436367,0.797502599 104.138087,2.07996125 L134.823205,58.1599225 C136.132398,60.5525961 136.132398,63.4474039 134.823205,65.8400775 L104.138087,121.920039 C103.436367,123.202497 102.09092,124 100.629034,124 L4,124 C1.790861,124 -2.81511679e-14,122.209139 -2.84217094e-14,120 L-2.84217094e-14,4 C-2.91363401e-14,1.790861 1.790861,4.05812251e-16 4,0 Z',
            },
            fo: {
                width: 136,
                height: 124,
                cursor:'pointer',
            },
            foBody: {
                style:{
                    paddingRight: '24px',
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
                class: 'node-operator',
            },
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
                    }]
                }],
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
        data: {
            metaData
        }
    })
}