const todosData = [
  { id: 1, text: "Go to shop", completed: true },
  { id: 2, text: "Buy apples", completed: false },
  { id: 3, text: "Read some book", completed: true },
  { id: 4, text: "Ride on bike", completed: false },
];
export default todosData;

export let addTodo = (todos, todosText) => {
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
