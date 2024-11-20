import axiosinstance from "../axios";

const deleteTodo = async (id) => {
  try {
    const response = await axiosinstance.delete(`/todo/${id}`);
    return response.data;
  } catch (error) {
    console.error("🚀 ~ deleteTodo ~ error:", error);
    throw error;
  }
};

export default deleteTodo;
