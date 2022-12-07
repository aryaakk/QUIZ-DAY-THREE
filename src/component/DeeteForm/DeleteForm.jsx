import React from "react";
import "../../assets/style.css";
import { useRef } from "react";

import { Input, Form, Button, message } from "antd";
import axios from "axios";
const { TextArea } = Input;

const DeleteForm = () => {
  const inputRefID = useRef(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  async function OnFinishForm() {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${inputRefID.current.value}`
      );
      messageApi.open({
        type: "success",
        content: "SUCCES POSTS USERS",
        className: "custom-class",
        duration: 1.5,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="wrapperForm">
        <div className="header">
          <span>DELETE DATA USERS</span>
        </div>
        {contextHolder}
        <Form
          form={form}
          onFinish={OnFinishForm}
          layout="horizontal"
          className="formInp"
          autoComplete="off"
        >
          <Form.Item className="itemFormInp">
            <div className="inp">
              <label>ID USERS</label>
              <input
                type="text"
                placeholder="Input ID"
                className="inp-form"
                ref={inputRefID}
              />
            </div>
          </Form.Item>
          <Form.Item className="itemFormSub">
            <Button className="submit" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default DeleteForm;
