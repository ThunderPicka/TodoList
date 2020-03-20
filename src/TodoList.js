import React from 'react';
//引入的时候可以说使用{}引入一些变量，比如Component
import TodoItem from './TodoItem';


class  TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
			inputValue:''
		}
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleDelete=this.handleDelete.bind(this);

	}
	
	/*handleItemClick(index){
		const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list: list
		});
	}*/
	//父组件通过属性的形式向子组件传递参数
	//子组件通过props接收父组件传的参数
	handleDelete(index){
		// console.log(e)
		const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list: list
		});

	}
	handleBtnClick(){
		this.setState({
			/*...是展开运算符，相当于省略写出所有数据的操作*/
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		});
		/*this.state.list.push("helloWord");*/
	}
	handleInputChange(e){
		this.setState({
			inputValue:e.target.value,
		});
		/*console.log(e.target.value)*/
	}

	getTodoItem(){
		return(
		          this.state.list.map((value,index)=>{
		           //return <li key={index}  onClick={this.handleItemClick.bind(this,index)}>{item}</li>
		           return (
		           	<TodoItem 
		           	delete={this.handleDelete}
		           	key={value}
		           	content={value}
		           	index={index}
		           	/>
		           )}
		        )
		)
	}

  render(){
  	/*render的返回值只能是一个大的dom元素，而不是多个*/
    return (
		/*<React.Fragment>作为最外层时，实际页面上可以少一个div*/
	    <div>
		    <div>
		        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
		        {/*在jsx语法中，要写一个js的表达式,需要使用{}*/}
		        <button className='red-btn' onClick={this.handleBtnClick}>add</button>
		    </div>
		    <ul>{this.getTodoItem()}</ul>
		</div>
		)
    }
}

export default TodoList;
