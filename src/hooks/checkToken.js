import axios from "axios";
import { useNavigate } from "react-router";

export async function useCheckTokenRedirect() {
    const navigate = useNavigate();
  
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/users/verifyToken",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
    //   toast(error.response.data.message);
      navigate("../signin");
    }
  }
  
  export async function useCheckToken(onfufilled,onError) {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/users/verifyToken",
        {
          headers: {
            'x-auth-token': `${token}`,
          },
        }
      )
      onfufilled()
    
    } catch (error) {
        onError()
    }
  }
  