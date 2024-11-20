import axiosinstance from "../axios";

const updateTodo = async ({ id, ...data }) => {
  try {
    const response = await axiosinstance.patch(`/todo/${id}`, data);
    console.log("🚀 ~ updateTodo ~ response:", response);
    return response.data;
  } catch (error) {
    console.error("🚀 ~ updateTodo ~ error:", error);
    throw error;
  }
};

export default updateTodo;
