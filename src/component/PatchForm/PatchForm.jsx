import React from "react";
import "../../assets/style.css";
import { useRef } from "react";

import { Input, Form, Button, message } from "antd";
import axios from "axios";
const { TextArea } = Input;

const PatchForm = () => {
  const inputRefTitle = useRef(null);
  const inputRefBody = useRef(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  async function OnFinishForm() {
    try {
      const title = inputRefTitle.current.value;
      const body = inputRefBody.current.value;
      console.log(title);
      console.log(body);
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          userId: 1,
          title: inputRefTitle.current.value,
          body: inputRefBody.current.value,
        }
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
          <span>PATCH DATA USERS</span>
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
              <label>TITLE</label>
              <input
                type="text"
                placeholder="Input Title"
                className="inp-form"
                ref={inputRefTitle}
              />
            </div>
            <div className="inp">
              <label>BODY</label>
              <textarea
                rows="10"
                className="ta-form"
                placeholder="Input Body"
                ref={inputRefBody}
              ></textarea>
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

export default PatchForm;
