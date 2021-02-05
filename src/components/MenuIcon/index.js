import React from 'react'

import './index.css'

/**
 * 右侧菜单图标(单个)
 * type 1正方形 2正方形（旋转45度） 3五边形 4六边形
 * @param {{type, color, iconUrl, onMouseDown}} props 
 */
export default function MenuIcon(props) {
  const { type, title, width, height, color, iconUrl, svgD, onMouseDown } = props || {};
  let elem = null;
  // type 1正方形 2正方形（旋转45度） 3五边形 4六边形
  switch (Number(type)) {
    case 1: elem = null;
      break;
    case 2: elem = (
      <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-d={svgD} data-body-fill={color}>
        <svg width={width} height={height} viewBox="0 0 58 58" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g id="g1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="g2" transform="translate(-1093, -327)" fill={color}>
              <g id="g3" transform="translate(1090, 324)">
                <path d="M3,34.2632146 L3,29.7367854 C3,27.6150535 3.84285472,25.5802222 5.34314575,24.0799312 L24.0799312,5.34314575 C25.5802222,3.84285472 27.6150535,3 29.7367854,3 L34.2632146,3 C36.3849465,3 38.4197778,3.84285472 39.9200688,5.34314575 L58.6568542,24.0799312 C60.1571453,25.5802222 61,27.6150535 61,29.7367854 L61,34.2632146 C61,36.3849465 60.1571453,38.4197778 58.6568542,39.9200688 L39.9200688,58.6568542 C38.4197778,60.1571453 36.3849465,61 34.2632146,61 L29.7367854,61 C27.6150535,61 25.5802222,60.1571453 24.0799312,58.6568542 L5.34314575,39.9200688 C3.84285472,38.4197778 3,36.3849465 3,34.2632146 Z"></path>
                { iconUrl && <image href={iconUrl} width={props.iconWidth} height={props.iconHeight} x={16} y={14} />}
                { !iconUrl && svgD && <g id="形状结合" transform="translate(16, 16)" fill="#FFF">
                  <path d={svgD}></path>
                </g>}
              </g>
            </g>
          </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
    );
      break;
    case 3: elem = (
      <div className="single_menu_icon" onMouseDown={onMouseDown} data-title={title} data-d={svgD} data-body-fill={color}>
        <svg width={width} height={height} viewBox="0 0 58 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g id="自动化sop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="UI样式" transform="translate(-153, -312)" fill={color}>
                <g id="编组-4" transform="translate(148, 306)">
                    <path d="M9,6 L47.2772359,6 C48.7579587,6 50.1175462,6.8179916 50.8111929,8.12619435 L62.0129087,29.2523887 C63.2556899,31.5962473 63.2556899,34.4037527 62.0129087,36.7476113 L50.8111929,57.8738057 C50.1175462,59.1820084 48.7579587,60 47.2772359,60 L9,60 C6.790861,60 5,58.209139 5,56 L5,10 C5,7.790861 6.790861,6 9,6 Z" id="矩形备份-3"></path>
                    { iconUrl && <image href={iconUrl} width={props.iconWidth} height={props.iconHeight} x={16} y={14} />}
                    { !iconUrl && svgD && <g id="形状结合" transform="translate(16, 16)" fill="#FFF">
                      <path d={svgD}></path>
                    </g>}
                </g>
            </g>
        </g>
        </svg>
        <div className="mi_title">{title}</div>
      </div>
    );
      break;
    case 4: elem = null;
      break;
    case 5: elem = null;
      break;
    default:
      break;
  }
  return elem;
}

MenuIcon.defaultProps = {
  type: 1,
  title: '',
  width: '58px',
  height: '58px',
  color: '#5BC9A4',
  iconUrl: '',
  iconWidth: '30px',
  iconHeight: '30px',
  onMouseDown: () => { },
}
