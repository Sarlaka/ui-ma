/*
 * @Author: duchengdong
 * @Date: 2021-02-01 11:56:34
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-03 17:18:55
 * @Description: 
 */
import React,{useEffect,useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import { Graph,Addon,Shape, Cell,Dom,FunctionExt} from '@antv/x6';
import { Tooltip } from 'antd';
import 'antd/lib/tooltip/style/css';
// 引入节点配置文件
// import './components/Graph';
import {DndUserNodeSvg} from './components/Graph/dndShape';
import {UserNodeSvg} from './components/Graph/shape';
import './App.css';

const {Dnd,Stencil } = Addon
const { Rect, Circle } = Shape

function App() {
  const refContainer = useRef(null)
  const [graph,setGraph] = useState(null)
  const [dnd,setDnd] = useState(null)
  const refStencil = useRef(null)
  useEffect(()=> {
    const graph = new Graph({
      container: refContainer.current,
      grid: true,
      snapline: {
        enabled: true,
        sharp: true,
      },
      selecting: {
        enabled: true,
        multiple: true,
        rubberband: true,
        movable: true,
        showNodeSelectionBox: true,
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
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        highlight: true,
        snap: true,
        createEdge() {
          console.log(1)
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#808080',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 8,
                },
              },
            },
            router: {
              name: 'manhattan',
            },
            zIndex: 0,
          })
        },
        validateMagnet({ magnet }) {
          return magnet.getAttribute('port-group') !== 'in'
        },
        validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
          // // 只能从输出链接桩创建连接
          // if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
          //   return false
          // }
    
          // // 只能连接到输入链接桩
          // if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
          //   return false
          // }
    
          // // 判断目标链接桩是否可连接
          // const portId = targetMagnet.getAttribute('port')
          // const node = targetView.cell
          // console.log(portId,node)
          // const port = node.getPort(portId)
          // if (port && port.connected) {
          //   return false
          // }
    
          // return true
          
          if (sourceView === targetView) {
            return false
          }
          if (!sourceMagnet) {
            return false
          }
          if (!targetMagnet) {
            return false
          }
          return true
        },
      },
    })

     // 连线事件
     graph.on('edge:connected', (args) => {
      console.log('连线事件')
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
      let markup = node.getMarkup()
      const data = node.getData()
      console.log(markup)
      // markup[1].textContent = 2
      markup = markup.map(m =>{
        return m.selector == 'text'?{
          ...m,
          textContent: data.text
        }:m
      })
      node.setMarkup(markup)
    })


    function showPorts(ports, show) {
      for (let i = 0, len = ports.length; i < len; i = i + 1) {
        ports[i].style.visibility = show ? 'visible' : 'hidden'
      }
    }
    // 节点的鼠标移入事件
    graph.on(
      'node:mouseenter',
      FunctionExt.debounce((args) => {
        const ports = refContainer.current.querySelectorAll(
          '.x6-port-body',
        )
        showPorts(ports, true)
      }),
      500,
    )

    // 节点鼠标移出事件
    graph.on('node:mouseleave', () => {
      const ports = refContainer.current.querySelectorAll(
        '.x6-port-body',
      )
      showPorts(ports, false)
    })

    // 节点删除事件
    graph.on('node:delete', ({ view, e }) => {
      e.stopPropagation()
      view.cell.remove()
    })

    // 边的鼠标移入事件
    graph.on(
      'edge:mouseenter',
      (e) => {
        e.cell.addTools({
          name: 'button-remove',
          // args: {
          //   distance: -60
          // },
        })
      },
    )

    graph.on(
      'edge:mouseleave',
      (e) => {
        e.cell.removeTools()
      },
    )

    // 绘图
    const userNode1 = graph.addNode({
      x: 100,
      y: 100,
      shape: 'user-node-svg',
      data: {
        text:4
      },
    })

    // const userNode1 = UserNodeSvg().setData({
    //   text:2
    // })
    // graph.addNode(userNode1)

    // 拖拽相关
    const dnd = new Dnd({
      target: graph,
      scaled: false,
      animation: true,
      validateNode(droppingNode, options) {
        return droppingNode.shape === 'html'
          ? new Promise((resolve) => {
              const { draggingNode, draggingGraph } = options
              const view = draggingGraph.findView(draggingNode)
              const contentElem = view.findOne('foreignObject > body > div')
              Dom.addClass(contentElem, 'validating')
              setTimeout(() => {
                Dom.removeClass(contentElem, 'validating')
                resolve(true)
              }, 3000)
            })
          : true
      }
    })

    setGraph(graph)
    setDnd(dnd)
    
  },[])
  const startDrag = (e) => {
    const target = e.currentTarget
    const type = target.getAttribute('data-type')
    const node = graph.createNode({
      shape: 'user-node-svg',
      data: {
        text:3
      },
    })

    dnd.start(node, e.nativeEvent)
  }
  return (
    <div id='container' className="app">
      <div className="app-content" ref={refContainer} />
      {/* <div className="app-stencil" ref={refStencil} /> */}
      <div className="dnd-pannel">
        <div className="dnd-group">
          <div className="dnd-group-title">对象</div>
          <div className="dnd-group-box">
            <div className="dnd-unit" onMouseDown={startDrag}>客户</div>
            <div className="dnd-unit" onMouseDown={startDrag}>客户群</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
