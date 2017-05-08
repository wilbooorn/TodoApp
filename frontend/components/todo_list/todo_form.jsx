import React from 'react';
import Util from '../../util/util';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { title: "", body: "", id: Util.uniqueId() };
    this.submitForm = this.submitForm.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }
  submitForm(e){

    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({ title: "", body: "", id: Util.uniqueId() });
  }

  titleChange(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    this.setState({title});
  }
  bodyChange(e){
    e.preventDefault();
    let body = document.getElementById('body').value;
    this.setState({body});
  }

  render(){
    return (
      <form>
        <input id='title' type="text" value={this.state.title} onChange={this.titleChange}/>
        <input id='body' type="text" value={this.state.body} onChange={this.bodyChange} />
        <button onClick={this.submitForm}>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
