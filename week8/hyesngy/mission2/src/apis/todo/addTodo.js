import axiosinstance from "../axios";

const addTodo = async (data) => {
  try {
    const response = await axiosinstance.post("/todo", data);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ addTodo ~ error:", error);
    throw error;
  }
};

export default addTodo;
