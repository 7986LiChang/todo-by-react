require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//左侧任务分类组件
class LeftTaskCategoryComponent extends React.Component{
	render() {
		return (
			<div className="left-task-category">所有任务</div>
		);
	}
}

//中部任务列表组件
class MiddleTaskListComponent extends React.Component{
	render() {
		return (
			<div className="middle-task-list">完成/未完成</div>
		);
	}
}

//右侧任务详情组件
class RightTaskContentComponent extends React.Component{
	render() {
		return (
			<div className="right-task-content">任务详情</div>
		);
	}
}

//包含左中有的内容组件
class MainContentComponent extends React.Component{
	render() {
		return (
			<div className="main-content clearfix">
				<LeftTaskCategoryComponent />
				<MiddleTaskListComponent />
				<RightTaskContentComponent />
			</div>
		);
	}
}

class AppComponent extends React.Component {
  render() {
    return (
	    <div className="wrap-content">
	    	<h1 className="header">GTD Tools 
	    	</h1>

	    	<MainContentComponent />
    	</div>	
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
