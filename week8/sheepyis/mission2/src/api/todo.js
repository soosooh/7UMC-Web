import API from "./axios";

const postTodo = async ({ title, content, checked = false }) => {
    const { data } = await API.post("/", {
        title,
        content,
        checked,
    });

    return data;
};

const getTodoList = async ({ title }) => {
    let url = "/";
    if (title) {
        url += `?title=${title}`;
    }

    const { data } = await API.get(url);

    return data;
};

const getTodoItem = async ({ id }) => {
    const { data } = await API.get(`/${id}`);

    return data;
};

const patchTodo = async ({ id, title, content, checked }) => {
    const { data } = await API.patch(`/${id}`, {
        title,
        content,
        checked,
    });

    return data;
};

const deleteTodo = async ({ id }) => {
    const { data } = await API.delete(`/${id}`);

    return data;
};

export { postTodo, getTodoList, getTodoItem, patchTodo, deleteTodo };