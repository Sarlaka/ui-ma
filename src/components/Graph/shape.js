/*
 * @Author: duchengdong
 * @Date: 2021-02-01 12:10:13
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-03 14:36:39
 * @Description: 
 */
/*
 * @Author: duchengdong
 * @Date: 2021-01-30 17:22:27
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-01-30 17:40:16
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

export const UserNodeSvg =  Graph.registerNode('user-node-svg', {
    inherit: 'circle',
    width: 120,
    height: 120,
    attrs: {
        body: {
            stroke: 0,
            fill: '#5BC9A4',
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
        fo: {
            refWidth: '100%',
            refHeight: '100%',
        },
        foBody: {
            xmlns: Dom.ns.xhtml,
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        }
    },
    markup: [{
            tagName: 'circle',
            selector: 'body',
        },
        {
            tagName: 'text',
            selector: 'text',
        },
        {
            tagName: 'foreignObject',
            selector: 'fo',
            children: [{
                ns: Dom.ns.xhtml,
                tagName: 'body',
                selector: 'foBody',
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