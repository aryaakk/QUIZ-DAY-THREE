import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios";
import GetForm from "./component/GetForm/GetForm";
import PostForm from "./component/PostForm/PostForm";
import PutForm from "./component/PutForm/PutForm";
import PatchForm from "./component/PatchForm/PatchForm";
import DeleteForm from "./component/DeeteForm/DeleteForm";

function App() {
  const [users, setUsers] = useState(null);

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status == 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="wrapperContent">
        <GetForm user={users} />
        <PostForm />
        <PutForm/>
        <PatchForm/>
        <DeleteForm/>
      </div>
    </>
  );
}

export default App;
