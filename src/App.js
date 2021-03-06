/*
 * @Author: duchengdong
 * @Date: 2021-02-01 11:56:34
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-19 14:45:29
 * @Description: 
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Graph,Addon,Shape, Cell,Dom,FunctionExt} from '@antv/x6';
import { Tooltip } from 'antd';
import 'antd/lib/tooltip/style/css';
// 引入节点配置文件
// import './components/Graph';
import createUserNode from './components/Node/createUserNode'
import createEventNode from './components/Node/createEventNode'
import createActionNode from './components/Node/createActionNode'
import createLogicNode from './components/Node/createLogicNode'
import DragNode from './components/DragNode'
import {GROUP_USER,GROUP_EVENT,GROUP_ACTION,GROUP_LOGIC, USER_INFO,USER_ATTR,GROUP_ATTR,AB_TEST} from 'utils/constants'
import sideData from 'mock/sideData'
import {createNormalEdge,createYesEdge,createNoEdge} from './components/Edge'
import {createDragUserNode,createDragEventNode,createDragActionNode,createDragLogicNode} from './components/DragNode/createDragNode'
import NewGuide from './components/NewGuide'
import {getPortTipText} from './utils/portUtil'
import './App.css';

const {Dnd,Stencil } = Addon
const { Rect, Circle } = Shape
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      graph:null,
      dnd:null,
      boxShow: false,
      boxPosition: {
        x: 0,
        y: 0
      },
      currentNode: null,
      isNew: false
    }
    this.refContainer = React.createRef();
    this.refStencil = React.createRef();
  }
  componentDidMount() {
    const graph = new Graph({
      container: this.refContainer.current,
      grid: false,
      background: {color:'#F7F8F9'},
      snapline: {
        enabled: true,
        sharp: false,
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
        const data =  args.node.getData()
        console.log(data,args.port.group)
        const contentSelectors = args.contentSelectors
        const container = contentSelectors && contentSelectors.content
        let txt = getPortTipText(args.port.group,data.type)
        if (container) {
          ReactDOM.render(
            <Tooltip title={txt}>
              <div className={`my-port${port.connected ? ' connected' : ''}`} />
            </Tooltip>,
            container,
          )
        }
      },
      // highlighting: {
      //   nodeAvailable: {
      //     name: 'className',
      //     args: {
      //       className: 'available',
      //     },
      //   },
      //   magnetAvailable: {
      //     name: 'className',
      //     args: {
      //       className: 'available',
      //     },
      //   },
      //   magnetAdsorbed: {
      //     name: 'className',
      //     args: {
      //       className: 'adsorbed',
      //     },
      //   },
      // },
      connecting: {
        anchor: 'center',
        // connectionPoint: 'anchor',
        allowMulti: false,
        allowLoop: false,
        allowBlank: false,
        highlight: true,
        snap: true,
        createEdge(args) {
          let type = args.sourceCell.getData().type
          let portType = args.sourceMagnet.getAttribute('port-group')
          if(type===USER_INFO||type===USER_ATTR||type===GROUP_ATTR||type===AB_TEST){
            // 有A/B输出的特殊处理
            if(portType==='outRight'){
              return createYesEdge(type)
            }
            if(portType==='outBottom'){
              return createNoEdge(type)
            }
          }
          return createNormalEdge()
        },
        validateMagnet({
          magnet
        }) {
          // console.log(magnet.getAttribute('port-group'),'***')
          return magnet.getAttribute('port-group') !== 'outRight'|| magnet.getAttribute('port-group') !== 'outBottom'
        },
        validateConnection({
          sourceView,
          targetView,
          sourceMagnet,
          targetMagnet
        }) {
          // // 只能从输出链接桩创建连接
          if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'inTop'||sourceMagnet.getAttribute('port-group') === 'inLeft') {
            return false
          }

          // 只能连接到输入链接桩
          if (!targetMagnet || targetMagnet.getAttribute('port-group') === 'outRight'||targetMagnet.getAttribute('port-group') === 'outBottom') {
            return false
          }
          
          // 判断是否已经连接
          let edges = graph.getConnectedEdges(sourceView.cell)
          let isConnected = edges.find(edge => {
            let sId = edge.getSourceCellId()
            if(sId&&targetView.cell.id==sId){
              return true
            }
            return false
          })

          if(isConnected){
            console.log(edges)
            return false
          }

          return true
        },
      },
    })

    // 添加背景
    // graph.drawBackground({
    //   color: '#f5f5f5',
    // })

    // 连线事件
    graph.on('edge:connected', (args) => {
      console.log('edge:connected')
      const edge = args.edge
      const node = args.currentCell
      const elem = args.currentMagnet
      const portId = elem.getAttribute('port')

      // 触发 port 重新渲染
      node.setPortProp(portId, 'connected', true)

      // 更新连线样式
      edge.attr({
        line: {
          strokeDasharray: '',
          targetMarker: 'classic',
        },
      })
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
        const ports = this.refContainer.current.querySelectorAll(
          '.x6-port-body',
        )
        showPorts(ports, true)
      }),
      500,
    )

    // 节点鼠标移出事件
    graph.on('node:mouseleave', () => {
      const ports = this.refContainer.current.querySelectorAll(
        '.x6-port-body',
      )
      showPorts(ports, false)
    })

    // 节点删除事件
    graph.on('node:delete', ({
      node,
      view,
      e
    }) => {
      console.log(view)
      e.stopPropagation()
      node.remove()
    })

    // 节点设置事件
    graph.on('node:contextmenu', (args) => {
      let {
        node,
        view,
        e
      } = args
      if(e.type!=='contextmenu') return
      e.stopPropagation()
      let props = node.prop()
      let position = props.position
      let metaData = props.data.metaData
      let dx = props.size.width
      let dy = props.size.height
      // console.log(position, dx, dy, metaData.group, name, e.currentTarget)
      this.setState({
        boxPosition: {
          x: metaData.group === GROUP_USER ? position.x + 0.5 * (dx - 24) : position.x + 0.5 * dx,
          y: position.y + dy - 15
        },
        boxShow: true,
        currentNode:node
      })
    })

    graph.on('node:moving', ({
      view,
      e
    }) => {
      e.stopPropagation()
      if(this.state.boxShow){
        // 优化
        this.hideBox()
      }
    })

    // 画布空白区域点击事件
    graph.on('blank:mousedown', ({
      view,
      e
    }) => {
      // 空白处点击
      console.log('blank:mousedown')
      e.stopPropagation()
      this.hideBox()
    })

    // 边的鼠标移入事件
    graph.on(
      'edge:mouseenter',
      (e) => {
        e.cell.addTools([{
          name: 'button-remove',
          args: {
            distance: '45%'
          },
        }, {
          name: 'target-arrowhead',
          args: {
            attrs: {
              d: 'M -10 -8 10 0 -10 8 Z',
              fill: '#4173FF',
              cursor: 'pointer'
            },
          },
        }])
      },
    )

    graph.on(
      'edge:mouseleave',
      (e) => {
        e.cell.removeTools()
      },
    )
    // 拖拽相关
    const dnd = new Dnd({
      target: graph,
      scaled: false,
      animation: true,
      validateNode:(droppingNode, options)=> {
        console.log(droppingNode)
        // 清除新建指导
        const {isNew} = this.state
        if(isNew){
          this.setState({
            isNew: false
          })
        }
        return droppingNode.shape === 'html' ?
          new Promise((resolve) => {
            const {
              draggingNode,
              draggingGraph
            } = options
            const view = draggingGraph.findView(draggingNode)
            const contentElem = view.findOne('foreignObject > body > div')
            Dom.addClass(contentElem, 'validating')
            setTimeout(() => {
              Dom.removeClass(contentElem, 'validating')
              resolve(true)
            }, 3000)
          }) :
          true
      },
      getDropNode:(dropNode,options)=>{
        console.log(dropNode)
        let metaData = dropNode.getData().metaData
        let node = null;
        switch (metaData.group) {
          case GROUP_USER:
            node = createUserNode(graph,metaData);
            break;
          case GROUP_EVENT:
            node = createEventNode(graph,metaData);
            break;
          case GROUP_ACTION:
            node = createActionNode(graph,metaData);
            break;
          case GROUP_LOGIC:
            node = createLogicNode(graph,metaData);
            break;
          default:
            return;
        }
        return node
      }
    })

    this.setState({
      graph,dnd,isNew:true
    })
  }
  hideBox = ()=>{
    // 隐藏设置盒子
    this.setState({
      boxPosition:{
        x: 0,
        y: 0
      },
      boxShow: false
    })
  }

  deleteNode = (e) => {
    const {currentNode} = this.state
    // 删除节点
    currentNode.remove()
    this.setState({
      boxShow: false,
      currentNode: null
    })
  }

  startDragNode = (e) => {
    const {graph,dnd} = this.state
    // // 节点拖拽开始
    const metaData = e.currentTarget.dataset || {};
    let node = null;
    switch (metaData.group) {
      case GROUP_USER:
        node = createDragUserNode(graph,metaData);
        break;
      case GROUP_EVENT:
        node = createDragEventNode(graph,metaData);
        break;
      case GROUP_ACTION:
        node = createDragActionNode(graph,metaData);
        break;
      case GROUP_LOGIC:
        node = createDragLogicNode(graph,metaData);
        break;
      default:
        return;
    }
    dnd.start(node, e.nativeEvent)
  }

  // 启用节点
  startNode = (e) => {
    const {graph,currentNode} = this.state
    let attrs = currentNode.getAttrs()
    let edges = graph.getConnectedEdges(currentNode)
    edges.forEach(edge => {
      let data = edge.getData()
      if(data.disable){
        // 如果边已经被禁用，判断是否启用
        let neighbors = graph.getNeighbors(edge)
        console.log(neighbors)
        // 判断边的相邻节点的状态
        let canUpdate = true
        neighbors.forEach(node => {
          // 如果发现相邻节点存在disable，则不更新
          if(node.id!=currentNode.id&&node.getData().disable){
            canUpdate=false
          }
        })
        if(canUpdate){
          let attrs = edge.getAttrs()
          edge.updateAttrs({
            line: {
              ...attrs.line,
              stroke: data.configData[data.type].color
            }
          },{
            silent: true
          })
          edge.setLabels({
              attrs: {
                  text: {
                      fill: data.configData[data.type].color,
                      text: data.configData[data.type].text,
                  },
              },
          })
          data.disable = false
          edge.setData(data,{
            silent: true
          })
        }
      }
    })
    console.log('startNode:attrs:',attrs)
    let nodeData = currentNode.getData()
    nodeData.disable = false
    currentNode.setData(nodeData,{
      silent: true
    })
    currentNode.updateAttrs({
      disabled: {
        ...attrs.disabled,
        class: 'node-disable hide'
      }
    })
    this.hideBox()
  }

  // 禁用节点
  stopNode = (e) => {
    const {graph,currentNode} = this.state
    let attrs = currentNode.getAttrs()
    let edges = graph.getConnectedEdges(currentNode)
    console.log('stopNode:attrs:',attrs,edges)
    edges.forEach(edge => {
      let data = edge.getData()
      console.log(data)
      if(!data.disable){
        let attrs = edge.getAttrs()
        edge.updateAttrs({
          line: {
            ...attrs.line,
            stroke: data.configData.DISABLE_COLOR
          }
        },{
          silent: true
        })
        edge.setLabels({
            attrs: {
                text: {
                    fill: data.configData.DISABLE_COLOR,
                    text: data.configData.DISABLE_TEXT,
                },
            },
        })
        data.disable = true
        edge.setData(data,{
          silent: true
        })
      }
    });
    // 设置节点
    let nodeData = currentNode.getData()
    nodeData.disable = true
    currentNode.setData(nodeData,{
      silent: true
    })
    currentNode.updateAttrs({
      disabled: {
        ...attrs.disabled,
        class: 'node-disable'
      }
    })
    this.hideBox()
  }

  outputJson = ()=> {
    const {graph} = this.state
    console.log(JSON.stringify(graph.toJSON()))
  }

  render(){
    const { boxPosition,boxShow,isNew}= this.state
    return (
      <div id='container' className="app">
        <div className="app-content" ref={this.refContainer}>
          {
            isNew?<NewGuide />:null
          }
        </div>
        {
            boxShow
            ?<div className="node-operator-box" style={{left:boxPosition.x,top:boxPosition.y}}>
              <div className="node-operator-box-item" onClick={this.outputJson}>设置</div>
              <div className="node-operator-box-item item-red" onClick={this.deleteNode}>删除</div>
              <div className="node-operator-box-item" onClick={this.startNode}>启用</div>
              <div className="node-operator-box-item item-red" onClick={this.stopNode}>禁用</div>
            </div>
            :''
        }
        {/* <div className="app-stencil" ref={this.refStencil} /> */}
        <div className="dnd-pannel">
          {
            sideData.map((v,i) => {
              return (
                <div className="dnd-group" key={i}>
                  <div className="dnd-group-title">{v.title}</div>
                  <div className="dnd-group-box">
                    {
                      v.children.map(u => {
                        return (
                          <DragNode 
                            key={u.type}
                            group={v.group}
                            onMouseDown={this.startDragNode}
                            type={u.type}
                            title={u.title}
                            color={u.color}
                            iconUrl={u.iconUrl}
                          />
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
