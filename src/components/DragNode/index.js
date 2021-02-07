/*
 * @Author: duchengdong
 * @Date: 2021-02-05 11:39:54
 * @LastEditors: duchengdong
 * @LastEditTime: 2021-02-07 15:45:17
 * @Description: 
 */
import React from 'react'
import './index.css'
import {GROUP_USER,GROUP_EVENT,GROUP_ACTION,GROUP_LOGIC} from 'utils/constants'

export function DragUserNode ({onMouseDown,title,color,iconUrl,group}){
  return (
    <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-body-fill={color} data-group={group} data-icon-url={iconUrl}>
        <svg width='59px' height='54px' viewBox="0 0 59 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
            <path d="M4,0 L42.2772359,0 C43.7579587,6.7991799e-15 45.1175462,0.817991602 45.8111929,2.12619435 L57.0129087,23.2523887 C58.2556899,25.5962473 58.2556899,28.4037527 57.0129087,30.7476113 L45.8111929,51.8738057 C45.1175462,53.1820084 43.7579587,54 42.2772359,54 L4,54 C1.790861,54 2.705415e-16,52.209139 0,50 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z"></path>
            <image href={iconUrl} width='32' height='32' x={10} y={10} />
          </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
  )
}

export function DragEventNode ({onMouseDown,title,color,iconUrl,group}) {
  return (
    <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-body-fill={color} data-group={group} data-icon-url={iconUrl}>
        <svg width='58px' height='58px' viewBox="0 0 58 58" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
            <path d="M0,31.2632146 L0,26.7367854 C4.23511471e-15,24.6150535 0.842854723,22.5802222 2.34314575,21.0799312 L21.0799312,2.34314575 C22.5802222,0.842854723 24.6150535,-3.16295785e-15 26.7367854,0 L31.2632146,0 C33.3849465,1.38660101e-15 35.4197778,0.842854723 36.9200688,2.34314575 L55.6568542,21.0799312 C57.1571453,22.5802222 58,24.6150535 58,26.7367854 L58,31.2632146 C58,33.3849465 57.1571453,35.4197778 55.6568542,36.9200688 L36.9200688,55.6568542 C35.4197778,57.1571453 33.3849465,58 31.2632146,58 L26.7367854,58 C24.6150535,58 22.5802222,57.1571453 21.0799312,55.6568542 L2.34314575,36.9200688 C0.842854723,35.4197778 -4.23511471e-15,33.3849465 0,31.2632146 Z"></path>
            <image href={iconUrl} width='32' height='32' x={14} y={14} />
          </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
  )
}

export function DragActionNode ({onMouseDown,title,color,iconUrl,group}) {
  return (
    <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-body-fill={color} data-group={group} data-icon-url={iconUrl}>
        <svg width='54px' height='54px' viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
            <rect x="0" y="0" width="54" height="54" rx="4"></rect>
            <image href={iconUrl} width='32' height='32' x={12} y={12} />
          </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
  )
}

export function DragLogicNode ({onMouseDown,title,color,iconUrl,group}) {
  return (
    <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-body-fill={color} data-group={group} data-icon-url={iconUrl}>
        <svg width='64px' height='54px' viewBox="0 0 64 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
          <path d="M18.798496,0 L45.2317086,0 C46.639257,1.11235299e-14 47.9432153,0.739796978 48.6652785,1.94802589 L62.392643,24.9180356 C63.1471044,26.1804765 63.1479374,27.7551116 62.3948121,29.0183499 L48.6646496,52.0483402 C47.9430924,53.2586286 46.637968,54 45.2289106,54 L18.8012959,54 C17.3941576,54 16.0905162,53.2606305 15.3683161,52.0529611 L1.59612218,29.0229765 C0.839314846,27.7574365 0.840151509,26.1781552 1.59829932,24.9134179 L15.3676933,1.94340259 C16.0903957,0.737795054 17.3928686,-3.65477359e-15 18.798496,0 Z"></path>
            <image href={iconUrl} width='32' height='32' x={16} y={11} />
          </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
  )
}

export default function DragNode (props) {
  switch (props.group) {
    case GROUP_USER:
      return <DragUserNode {...props}/>
    case GROUP_EVENT:
      return <DragEventNode {...props}/>
    case GROUP_ACTION:
      return <DragActionNode {...props}/>
    case GROUP_LOGIC:
      return <DragLogicNode {...props}/>
    default:
      break;
  }
}