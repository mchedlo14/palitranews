import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "./store/slices/data-slice";

const DataProvider = () => {
    const dispatch = useDispatch();

    const getPosts = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.data;
      dispatch(dataActions.SetPosts(data));
    }
  
    const getUsers = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.data;
      dispatch(dataActions.setAuthors(data));
    }
    
    const getComments = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
      const comments = await res.data;
      dispatch(dataActions.setComments(comments));
    }
  
    useEffect(() => {
      getPosts();
      getUsers();
      getComments();
    }, []);

    return null;
}

export default DataProvider;