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
            d: 'M15,1.5 L111.597721,1.5 C113.076172,1.5 114.43406,2.31550651 115.128708,3.62060367 L144.999352,59.7412073 C146.250054,62.0910097 146.250054,64.9089903 144.999352,67.2587927 L115.128708,123.379396 C114.43406,124.684493 113.076172,125.5 111.597721,125.5 L15,125.5 C12.790861,125.5 11,123.709139 11,121.5 L11,5.5 C11,3.290861 12.790861,1.5 15,1.5 Z',
        },
        bodyg1: {
            fill: '#5BC9A4',
            transform: 'translate(-54, -79)'
        },
        bodyg2: {
            transform: 'translate(54, 79.5)',
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
          transform: 'translate(52,18)'
        },
        iconPath: {
          fill: 'white',
        },
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
                            tagName: 'g',
                            selector: 'bodyg2',
                            children: [
                                {
                                    tagName: 'path',
                                    selector: 'bodyPath',
                                },
                            ]
                        }
                    ]
                }
            ]
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
        // {
        //     tagName: 'foreignObject',
        //     selector: 'fo',
        //     children: [{
        //         ns: Dom.ns.xhtml,
        //         tagName: 'body',
        //         selector: 'foBody',
        //     }, ],
        // },
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