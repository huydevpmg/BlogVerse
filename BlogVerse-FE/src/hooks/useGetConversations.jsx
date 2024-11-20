import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/v1/api/user";

const useGetConversations = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(`${API_URL}/getAllUsers`);
        setConversations(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getConversations();
  }, []);

  return { conversations };
};

export default useGetConversations;
