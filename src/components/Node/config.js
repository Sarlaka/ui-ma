/*
 * @Author: duchengdong
 * @Date: 2021-02-08 10:20:10
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-08 10:20:49
 * @Description: 
 */

 export const PORTS = {
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
}