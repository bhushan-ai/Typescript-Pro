import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userid: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const data: AxiosResponse<Todo> = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    console.log(data.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(`Axios error`, error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

fetchData();
