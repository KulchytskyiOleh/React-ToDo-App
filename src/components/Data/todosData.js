const todosData = [
  { id: 1, text: "go to shop", completed: true },
  { id: 2, text: "buy apples", completed: false },
  { id: 3, text: "read some book", completed: true },
  { id: 4, text: "ride on bike", completed: false },
];
export default todosData;

export let addTodo = (todosText, todos) => {
  let newTodo = {
    id: Date.now(),
    text: todosText,
    completed: false,
  };
  todos.push(newTodo);
  return true;
};

export const contacts = [
  {
    tel: {
      phone: "0987073724",
    },
    social: {
      linkedin: "https://www.linkedin.com/in/oleh-kulchytskyi/",
      email: "olegkakb@gmail.com",
    },
  },
];
