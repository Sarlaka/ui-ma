/*
 * @Author: duchengdong
 * @Date: 2021-02-01 18:07:54
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-02 11:56:15
 * @Description: 
 */
import {
    Graph,
    Dom
} from '@antv/x6'

export const DndUserNodeSvg = Graph.registerNode('dnd-user-node-svg', {
    inherit: 'rect',
    width: 58,
    height: 54,
    attrs: {
        g1: {
            stroke: 'none',
            strokeWidth: 1,
            fill: '#4173FF',
            fillRule: 'evenodd',
        },
        g2: {
            transform: "translate(-1095.000000, -174.000000)",
            fill: "#4173FF"
        },
        g3: {
            transform: "translate(1090.000000, 168.000000)"
        },
        p1: {
            d: "M9,6 L47.2772359,6 C48.7579587,6 50.1175462,6.8179916 50.8111929,8.12619435 L62.0129087,29.2523887 C63.2556899,31.5962473 63.2556899,34.4037527 62.0129087,36.7476113 L50.8111929,57.8738057 C50.1175462,59.1820084 48.7579587,60 47.2772359,60 L9,60 C6.790861,60 5,58.209139 5,56 L5,10 C5,7.790861 6.790861,6 9,6 Z"
        }
    },
    markup: [{
        tagName: 'rect',
        selector: 'body',
        children: [{
            tagName: 'g',
            selector: 'g1',
            children: [{
                tagName: 'g',
                selector: 'g2',
                children: [{
                    tagName: 'g',
                    selector: 'g3',
                    children: [{
                        tagName: 'path',
                        selector: 'p1'
                    }]
                }]
            }]
        }]
    }]
})