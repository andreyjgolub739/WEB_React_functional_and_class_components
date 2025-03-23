import React from 'react';

function App() {
  return (
    <div>
      <UserInfo name="Андрій" age="19"/>
      <Counter />
    </div>
  );
}

// Завдання 1: Створення функціонального компоненту
function UserInfo(props) {
  return <h1>Привіт, мене звати {props.name},
          мені {props.age} років</h1>;
}

// Завдання 2: Створення класового компоненту
class Counter extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return ( 
    <div>
      <h2>Лічильник. Число: {this.state.count}</h2>
      <button onClick={this.incrementCount}>Збільшити</button>
    </div>
    ); 
  }
}

export default App;
