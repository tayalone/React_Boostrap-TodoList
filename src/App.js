import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Form from './Components/Form'
import Listgroup from './Components/Listgroup'
import styled from 'styled-components'

const MyConatainer = styled(Container)`
  min-height : 100%;
`
const MyRow = styled(Row)`
  background-color: wheat;
  border-radius: 20px;
  width: 75%;
`

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDoList : [],
      ID : 1,
      input: ""
    }
    this.onInputChangeHandle = this.onInputChangeHandle.bind(this)
    this.addNewList = this.addNewList.bind(this)
    this.deleteList = this.deleteList.bind(this)
    this.doneTodo = this.doneTodo.bind(this)
  }
  onInputChangeHandle(event){
    this.setState({
      input: event.target.value
    })
  }
  addNewList(){
    const toDo = this.state.input
    const ID = this.state.ID
    let done = false
    this.setState({
      toDoList: [{ID,toDo,done},...this.state.toDoList],
      ID: ID+1,
      input: ""
    })
  }
  deleteList(ID){
    let newToDoList = this.state.toDoList.filter(list => {
      return list.ID !== ID
    })
    this.setState({
      toDoList: newToDoList
    })
  }
  doneTodo(ID){
    let tmpToDoList = this.state.toDoList
    let listIndex = tmpToDoList.findIndex((list => list.ID == ID));

    tmpToDoList[listIndex].done = !tmpToDoList[listIndex].done
    this.setState({
      toDoList: tmpToDoList
    })
  }
  render() {
    return (
      <div>
        <header className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App - Todolist</h1>
        </header>
          <MyConatainer className="d-flex flex-column justify-content-start align-items-center">
            <MyRow className="p-3 mt-5">
              <Col xs={12}>
                <h2 className="text-center mt-2"> <u>Todo List</u> </h2>
                <Form 
                  input = {this.state.input}
                  onInputChange = {this.onInputChangeHandle}
                  onClickSubmit = {this.addNewList}
                />
                <Listgroup 
                  toDo = {this.state.toDoList}
                  onDoneCheck = {this.doneTodo}
                  onDeleteClick = {this.deleteList}
                />
              </Col>
            </MyRow>
          </MyConatainer>
      </div>
    );
  }
}

export default App;
