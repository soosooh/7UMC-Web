import axiosinstance from "../axios";

const getTodos = async () => {
  try {
    const response = await axiosinstance.get("/todo");
    const todos = response.data[0] || [];
    console.log("todo 데이터: ", todos);
    return todos;
  } catch (error) {
    console.error("🚀 ~ getTodos ~ error:", error);
    throw error;
  }
};

export default getTodos;
