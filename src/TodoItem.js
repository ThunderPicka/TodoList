import React from 'react';

class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this);
	}
	//子组件与父组件通信，子组件要调用父组件的方法
	handleDelete(){
		this.props.delete(this.props.index);
	}
	render(){
		const {content}=this.props;
		return(
			<div onClick={this.handleDelete}>{content}</div>
			);
	};
}

export default TodoItem;