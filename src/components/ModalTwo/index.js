import React, { useState } from 'react';
import { Modal, Button, Form, Input, Checkbox, Select, DatePicker, Space } from 'antd';
import "antd/dist/antd.css"
import { RightOutlined, FormOutlined } from '@ant-design/icons';
import './modaltwo.css'
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')




const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const { Option } = Select;
const ModalTwo = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

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

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
      function onOk(value) {
        console.log('onOk: ', value);
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
                 
                    className='modal-box-space'
                    
                >
                    <Space 
                     className='modal-box-space-left'>
                        <DatePicker 
                        locale={locale}
                         placeholder='开始时间'
                         style={{width:'170px',marginRight:"10px"}}
                        showTime onChange={onChange} onOk={onOk} />
                      
                    </Space>
                    →
                    <Space  className='modal-box-space-right'>
                        <DatePicker 
                        locale={locale}
                         placeholder='结束时间'
                         style={{width:'170px',marginLeft:"10px"}}
                        showTime onChange={onChange} onOk={onOk} />
                      
                    </Space>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="生效条件"
                    label="生效条件"
                >
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="周期内单对象达到数"
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
                     <Select
                        showSearch
                        style={{ width: 90 }}
                        placeholder="间隔一段时间"
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
                    <FormOutlined style={{ color: "blue" }} />
                </Form.Item>



            </Modal>
        </>
    );
}
export default ModalTwo
