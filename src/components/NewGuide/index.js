/*
 * @Author: duchengdong
 * @Date: 2021-02-18 16:23:04
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-18 17:25:49
 * @Description: 
 */
import './index.css'
const data = [{
    img:'./assets/guide/user.png',
    title:'选择客户',
    desc:'开始SOP设计'
},{
    img:'./assets/guide/event.png',
    title:'事件',
    desc:'做了什么事情'
},{
    img:'./assets/guide/logic.png',
    title:'逻辑处理',
    desc:'处理来源数据'
},{
    img:'./assets/guide/action.png',
    title:'动作',
    desc:'系统自动运行一个功能'
}]
export default function NewGuide() {
    return (
        <div className='app-guide'>
              <div className="flow-guide">
                  {
                      data.map((v,i,a) => {
                          return (
                            <>
                                <div className='flow-guide-step' style={{background: `url(${v.img}) no-repeat center / cover`}}>
                                    <div className="flow-guide-text">{v.title}</div>
                                    <div className="flow-guide-desc">{v.desc}</div>
                                </div>
                                {
                                    i<a.length-1?<img className='flow-guide-arrow' src='./assets/guide/arrow.png'/>:null
                                }
                            </>
                          )
                      })
                  }
              </div>
              <div className="action-guide">
                  <div className="action-guide-text">拖拽这些控件到画板即可开始设计SOP</div>
                  <img src="./assets/guide/long-arrow.png" alt="" className="action-guide-arrow"/>
              </div>
        </div>
    )
}