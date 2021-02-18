import React, { useState } from 'react';
import { Tree, Button } from 'antd';
import  './index.css'

const initTreeDate = [
  {
    title: 'Expand to load',
    key: '0',
  },
];

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    } else if (node.children) {
      return { ...node, children: updateTreeData(node.children, key, children) };
    }

    return node;
  });
}

const Trees = () => {
  const [treeData, setTreeData] = useState(initTreeDate);

  function onLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
     
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: 'Child Node',
              key: `${key}-0`,
            },
            {
              title: 'Child Node',
              key: `${key}-1`,
            },
          ]),
        );
        resolve();
   
    });
  }
    return (
      <div className='UserTree'>
      <div className="left-box">
          <Tree
             loadData={onLoadData} treeData={treeData} 
          >
             
          </Tree>
      </div>
      <div className="right-box">
          
          {/* {
              selectItem.map((v,i)=>{
                  return <div className="select-item" key={i}>
                      <div>{v[labelKey]}</div>
                      <em onClick={()=>this.delSelect(v[filterKey])} className="iconfont icon_delete_circle del-icon"></em>
                  </div>
              })
          } */}
      </div>
  </div>
      );
    }
  
export default Trees
