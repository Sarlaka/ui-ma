/*
 * @Author: duchengdong
 * @Date: 2021-02-01 11:56:34
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-02 11:58:41
 * @Description: 
 */
import React,{useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import { Graph,Addon,Shape, Cell} from '@antv/x6';
import { Tooltip } from 'antd';
import 'antd/lib/tooltip/style/css';
// 引入节点配置文件
import './components/Graph';
import './App.css';

const { Stencil } = Addon
const { Rect, Circle } = Shape

function App() {
  const refContainer = useRef(null)
  const refStencil = useRef(null)
  useEffect(()=> {
    const graph = new Graph({
      container: refContainer.current,
      grid: true,
      snapline: {
        enabled: true,
        sharp: true,
      },
      scroller: {
        enabled: false,
        pageVisible: false,
        pageBreak: false,
        pannable: true,
      },
      onPortRendered(args) {
        // console.log(args)
        const port = args.port
        const contentSelectors = args.contentSelectors
        const container = contentSelectors && contentSelectors.content
        // console.log(port.connected)
        if (container) {
          ReactDOM.render(
            <Tooltip title="port">
              <div className={`my-port${port.connected ? ' connected' : ''}`} />,
            </Tooltip>,
            container,
          )
        }
      },
      highlighting: {
        nodeAvailable: {
          name: 'className',
          args: {
            className: 'available',
          },
        },
        magnetAvailable: {
          name: 'className',
          args: {
            className: 'available',
          },
        },
        magnetAdsorbed: {
          name: 'className',
          args: {
            className: 'adsorbed',
          },
        },
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        sourceAnchor: 'right',
        targetAnchor: 'center',
        connectionPoint: 'anchor',
        createEdge() {
          return graph.createEdge({
            router: {
              name: 'manhattan',
              args: { 
                startDirections: ['right'],
                endDirections: ['left'],
              },
            },
            attrs: {
              line: {
                stroke: '#808080',
                strokeWidth: 1,
                targetMarker: 'classic',
              },
            },
          })
        },
        validateMagnet({ magnet }) {
          return magnet.getAttribute('port-group') !== 'in'
        },
        validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
          // 只能从输出链接桩创建连接
          if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
            return false
          }
    
          // 只能连接到输入链接桩
          if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
            return false
          }
    
          // 判断目标链接桩是否可连接
          const portId = targetMagnet.getAttribute('port')
          const node = targetView.cell
          console.log(portId,node)
          const port = node.getPort(portId)
          if (port && port.connected) {
            return false
          }
    
          return true
        },
      },
    })

     // 连线事件
     graph.on('edge:connected', (args) => {
      const edge = args.edge
      const node = args.currentCell 
      const elem = args.currentMagnet
      const portId = elem.getAttribute('port')
    
      // 触发 port 重新渲染
      node.setPortProp(portId, 'connected',true)
    
      // 更新连线样式
      edge.attr({
        line: {
          strokeDasharray: '',
          targetMarker: 'classic',
        },
      })
    })

    // 节点点击事件
    graph.on('node:click', ({ e, x, y, node, view }) => { 
      console.log(node.markup)
      let markup = node.getMarkup()
      markup[1].textContent = 2
      node.setMarkup(markup)
    })

    // 绘图
    const userNode1 = graph.addNode({
      x: 100,
      y: 100,
      shape: 'user-node-svg',
      data: {
        text:2
      },
    })

    // 拖拽控件
    const stencil = new Stencil({
      title:'组件',
      target: graph,
      collapsable: true,
      stencilGraphWidth: 250,
      stencilGraphHeight: 280,
      groups: [
        {
          name: 'group1',
          title: 'Group(Collapsable)',
        },
        {
          name: 'group2',
          title: 'Group',
        },
      ],
    })

    refStencil.current.appendChild(stencil.container)

    const r = new Rect({
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
    })

    const c = new Circle({
      width: 60,
      height: 60,
      attrs: {
        circle: { fill: '#FE854F', strokeWidth: 6, stroke: '#4B4A67' },
        text: { text: 'ellipse1', fill: 'white' },
      },
    })

    const c2 = new Circle({
      width: 60,
      height: 60,
      attrs: {
        circle: { fill: '#4B4A67', 'stroke-width': 6, stroke: '#FE854F' },
        text: { text: 'ellipse2', fill: 'white' },
      },
    })

    const r2 = new Rect({
      width: 70,
      height: 40,
      attrs: {
        rect: { fill: '#4B4A67', stroke: '#31D0C6', strokeWidth: 6 },
        text: { text: 'rect2', fill: 'white' },
      },
    })

    const r3 = new Rect({
      width: 70,
      height: 40,
      attrs: {
        rect: { fill: '#31D0C6', stroke: '#4B4A67', strokeWidth: 6 },
        text: { text: 'rect3', fill: 'white' },
      },
    })

    const c3 = new Circle({
      width: 60,
      height: 60,
      attrs: {
        circle: { fill: '#FE854F', strokeWidth: 6, stroke: '#4B4A67' },
        text: { text: 'ellipse3', fill: 'white' },
      },
    })

    stencil.load([r, c, c2, r2.clone()], 'group1')
    stencil.load([c2.clone(), r2, r3, c3], 'group2')
  },[])
  return (
    <div id='container' className="app">
      <div className="app-content" ref={refContainer} />
      <div className="app-stencil" ref={refStencil} />
    </div>
  );
}

export default App;
