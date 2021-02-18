import React, { useState } from 'react';
import { Modal, Button, Form, Input, Checkbox, Select } from 'antd';
import  Trees  from '../Trees/index'
import "antd/dist/antd.css"
import { RightOutlined } from '@ant-design/icons';
import './index.css'


const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};

const { Option } = Select;
const Modaltext = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [showUserModal, setShowUserModal] = useState(false)

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleOkModal = () => {
        setShowUserModal(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleCancelModal = () => {
        setShowUserModal(false);
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
    const showUserModalFn = () => {
        setShowUserModal(true);
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
                    name="互动类型"
                    label="互动类型"
                >

                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="客户与指定成员成为好友"
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
                        placeholder="无条件"
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
                    name="生效条件"
                    label="生效条件"
                >
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="无限制"
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
                    name="选择成员"
                    label="选择成员"
                >
                    <span
                        className="checkbook-select"
                        onClick={showUserModalFn}
                    >选择成员
                    </span>
                    <Modal className='ModalTrees' title="选择成员" visible={showUserModal} onOk={handleOkModal} onCancel={handleCancelModal}>
                       <Trees></Trees>
                    </Modal>
                    <span className="checkbook-icon">
                        <RightOutlined />
                    </span>
                    <span>
                        共 16 个标签
                    </span>
                </Form.Item>

            </Modal>
        </>
    );
}
export default Modaltext
