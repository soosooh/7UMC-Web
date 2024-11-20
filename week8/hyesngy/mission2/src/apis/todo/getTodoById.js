import axiosinstance from "../axios";

const getTodoById = async (id) => {
  try {
    const response = await axiosinstance.get(`/todo/${id}`);
    return response.data;
  } catch (error) {
    console.error("🚀 ~ getTodoId ~ error:", error);
    throw error;
  }
};

export default getTodoById;
