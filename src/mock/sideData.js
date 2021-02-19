/*
 * @Author: duchengdong
 * @Date: 2021-02-18 10:01:31
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-18 14:07:27
 * @Description: 
 */
import {
    GROUP_USER,
    GROUP_EVENT,
    GROUP_ACTION,
    GROUP_LOGIC,
    USER,
    GROUP,
    USER_EVENT,
    CUSTOMER_EVENT,
    VISIT_EVENT,
    TIMING_EVENT,
    USER_INFO,
    GROUP_NAME,
    TASK_CENTER,
    EXCEL_ACTION,
    STOP_ACTION,
    COMBINE,
    DELAY,
    AB_TEST,
    USER_ATTR,
    GROUP_ATTR,
    GROUP_OUTPUT,
    BLUE,
    GREEN,
    YELLOW,
    RED
} from 'utils/constants'

const data = [{
    title: '对象',
    group: GROUP_USER,
    children: [{
        type: USER,
        title: "客户",
        color: BLUE,
        iconUrl: './assets/shapeIcon/user.png'
    }, {
        type: GROUP,
        title: "客户群",
        color: GREEN,
        iconUrl: './assets/shapeIcon/group.png'
    }]
}, {
    title: '事件',
    group: GROUP_EVENT,
    children: [{
        type: USER_EVENT,
        title: "企微客户事件",
        color: GREEN,
        iconUrl: './assets/shapeIcon/qywechat.png'
    }, {
        type: CUSTOMER_EVENT,
        title: "客户群事件",
        color: GREEN,
        iconUrl: './assets/shapeIcon/group.png'
    }, {
        type: VISIT_EVENT,
        title: "客户访问页面",
        color: BLUE,
        iconUrl: './assets/shapeIcon/visit.png'
    }, {
        type: TIMING_EVENT,
        title: "定时处理",
        color: YELLOW,
        iconUrl: './assets/shapeIcon/timing.png'
    }]
}, {
    title: '动作',
    group: GROUP_ACTION,
    children: [{
        type: USER_INFO,
        title: "设置客户信息",
        color: BLUE,
        iconUrl: './assets/shapeIcon/userInfo.png'
    }, {
        type: GROUP_NAME,
        title: "设置群名称",
        color: GREEN,
        iconUrl: './assets/shapeIcon/group.png'
    }, {
        type: TASK_CENTER,
        title: "任务中心",
        color: RED,
        iconUrl: './assets/shapeIcon/task.png'
    }, {
        type: EXCEL_ACTION,
        title: "输出值到Excel",
        color: GREEN,
        iconUrl: './assets/shapeIcon/excel.png'
    }, {
        type: STOP_ACTION,
        title: "停止SOP",
        color: RED,
        iconUrl: './assets/shapeIcon/stop.png'
    }]
}, {
    title: '逻辑',
    group: GROUP_LOGIC,
    children: [{
        type: COMBINE,
        title: "合并",
        color: BLUE,
        iconUrl: './assets/shapeIcon/combine.png'
    }, {
        type: DELAY,
        title: "延时",
        color: BLUE,
        iconUrl: './assets/shapeIcon/delay.png'
    }, {
        type: AB_TEST,
        title: "A/B分配",
        color: YELLOW,
        iconUrl: './assets/shapeIcon/ab_test.png'
    }, {
        type: USER_ATTR,
        title: "客户属性",
        color: BLUE,
        iconUrl: './assets/shapeIcon/user-attr.png'
    }, {
        type: GROUP_ATTR,
        title: "客户群属性",
        color: GREEN,
        iconUrl: './assets/shapeIcon/group-attr.png'
    }, {
        type: GROUP_OUTPUT,
        title: "输出群客户",
        color: BLUE,
        iconUrl: './assets/shapeIcon/group-output.png'
    }]
}]

export default data