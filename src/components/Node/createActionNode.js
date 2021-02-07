/*
 * @Author: duchengdong
 * @Date: 2021-02-07 14:13:14
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-07 20:51:08
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

export default function createActionNode(graph,metaData) {
    return graph.createNode({
        shape: 'rect',
        width: 124,
        height: 124,
        attrs: {
            body: {
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