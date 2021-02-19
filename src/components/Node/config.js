/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:20:10
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-18 18:48:25
 * @Description: 
 */
import {
    Dom
} from '@antv/x6'
export const PORTS = {
    groups: {
        inTop: {
            position: 'top',
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'visible',
                    },
                },
            },
        },
        outRight: {
            position: 'right',
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'visible',
                    },
                },
            },
        },
        outBottom: {
            position: 'bottom',
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'visible',
                    },
                },
            },
        },
        inLeft: {
            position: 'left',
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'visible',
                    },
                },
            },
        },
    },
    items: [{
        group: 'inTop',
    }, {
        group: 'outRight',
    }, {
        group: 'outBottom',
    }, {
        group: 'inLeft',
    }]
}

export const PORT_MARKUP = [{
    tagName: 'foreignObject',
    selector: 'port-fo',
    attrs: {
        width: 10,
        height: 10,
        x: -5,
        y: -5,
        magnet: 'true',
    },
    children: [{
        ns: Dom.ns.xhtml,
        tagName: 'body',
        selector: 'port-foBody',
        attrs: {
            xmlns: Dom.ns.xhtml,
        },
        style: {
            width: '100%',
            height: '100%',
        },
        children: [{
            tagName: 'div',
            selector: 'content',
            style: {
                width: '100%',
                height: '100%',
            }
        }],
    }, ],
}]