import React from "react";
import "./styles.css";
const Task = (props) => {
  return (
    <li>
      <span>{props.tasks.text}</span>
      <button onClick={props.onDelete}>delete</button>
    </li>
  );
};
var id = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }
  addTask() {
    const text = prompt("Enter task:");
    this.setState({
      tasks: [...this.state.tasks, { text: text, id: id++ }]
    });
  }
  removeTask(id) {
    this.setState({
      tasks: [...this.state.tasks.filter((tasks) => tasks.id !== id)]
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addTask()}>Add Task</button>
        {this.state.tasks.map((tasks) => (
          <Task tasks={tasks} onDelete={() => this.removeTask(tasks.id)} />
        ))}
      </div>
    );
  }
}
export default App;
