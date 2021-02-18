import React, { useState } from 'react';
import { Modal, Button, Form, Input, Checkbox, Select } from 'antd';
import  Trees  from '../Trees/index'
import "antd/dist/antd.css"
import { RightOutlined,FormOutlined } from '@ant-design/icons';
import './modalone.css'


const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};

const { Option } = Select;
const ModalOne = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };
  

    const handleCancel = () => {
        setIsModalVisible(false);
    };
 


    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
 

    return (
        <>

            <Modal
                className="modal-box"
                title="好友关系变更"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText='上一步'
                okText='保 存'
            >
                <Form.Item
                    {...formItemLayout}
                    name="变更类型"
                    label="变更类型"
                >

                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="客户与任意成员成为好友"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="事件条件"
                    label="事件条件"
                >
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="在某事件达成"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    className='modal-box-item'
                >
                    <Input
                    className='modal-box-input'
                    placeholder=" 请输入"
                    ></Input>
                    天
                     <Input
                    className='modal-box-input'
                    placeholder=" 请输入"
                    ></Input>
                    时
                     <Input
                    className='modal-box-input'
                    placeholder=" 请输入"
                    ></Input>
                    分
                   
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    name="生效条件"
                    label="生效条件"
                >
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="累计达到数"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    className='modal-box-lastitem'
                   
                >
                    <Select
                        showSearch
                        style={{ width: 90 }}
                        placeholder="等于"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Input className='modal-box-lastinput'>
                    </Input>
                    <FormOutlined style={{color:"blue"}}/>
                </Form.Item>
             
             

            </Modal>
        </>
    );
}
export default ModalOne
