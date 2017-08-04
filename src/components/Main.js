import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';
import $ from 'jquery'
/**
 * [taskCategorydata 用于显示左侧任务分类列表的数据]
 * @type {[数组]}
 */
let taskCategoryData = require('../data/taskCategory.json');

//左侧任务分类组件
class LeftTaskCategoryComponent extends React.Component {
  constructor(props, context){
  	super(props);

  	this.onMenuClieked = this.onMenuClieked.bind(this);
  }	
  /**
   * [onMenuClieked 监听菜单点击，点击后显示下一级列表]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  onMenuClieked(event){
  	//被点击的li标签
  	let nodeli = $(event.target);
  	//选择li标签的直接兄弟元素，即下一层ul
  	let subMenu = nodeli.next();

  	subMenu.css("display", subMenu.css('display') == 'none' ? "block" : "none");
  }
  /**
   * [generateMenu 循环生成菜单列表]
   * @param  {[type]} menuObj [要显示的菜单数组]
   * @return {[type]}         [要显示的ul组件]
   */
  generateMenu(menuObj) {

    let taskCategoryDOM = [];

    //如果当前对象是菜单列表（Array类型），生成<ul>,并循环生成每个菜单项
    if (menuObj instanceof Array) {
      let list = [];
      for (var item of menuObj) {
        list.push(this.generateMenu(item));
      }
      taskCategoryDOM.push( 
      	<ul key="single"> 
      		{ list } 
      	</ul>	
      );
    }
    //如果当前对象是菜单项（Object类型）,生成<li>,并填充<h1>作为标题，并循环递归子菜单列表
    else {
      taskCategoryDOM.push( 
      	<li key={menuObj.menuId} >
      		<h4 onClick={this.onMenuClieked} >
        		{ menuObj.name } 
        	</h4>
        	{ this.generateMenu(menuObj.children) } 
        </li >
      );
    }

    return taskCategoryDOM;
  }

  render() {
    return ( 
     <div className = "left-task-category" > 
     	<p className="task-category-title">所有任务分类列表</p>
      	{ this.generateMenu(taskCategoryData) } 
      	<div  className = "add-task-category">
  	  		<a>新增分类</a>
  	  	</div>
  	  </div>
  	  
    );
  }
}

//中部任务列表组件
class MiddleTaskListComponent extends React.Component {
  render() {
    return ( 
    <div className = "middle-task-list" >
	    <div>
	    	<input type="text" className="task-search-input"/>
			<div className = "task-list-nav-button">
				<button className="task-button">所有</button>
				<button className="task-button">未完成</button>
				<button className="task-button">已完成</button>			
			</div>
	    </div>
    	
		<ul>
			<span className="task-list-date">2017-1-24</span>
			<li className="completed"><a>任务1</a></li>
			<li className="uncompleted"><a>任务2</a></li>
			<li className="completed"><a>任务3</a></li>		
		</ul>
		<ul>
			<span className="task-list-date">2017-1-25</span>
			<li className="completed"><a>任务1</a></li>
			<li className="completed"><a>任务2</a></li>
			<li className="uncompleted"><a>任务3</a></li>		
		</ul>
		<div  className = "add-task">
  	  		<a>新增任务</a>
  	  	</div>
    < /div>
    );
  }
}

//右侧任务详情组件
class RightTaskContentComponent extends React.Component {
  render() {
    return ( 
      <div className = "right-task-content" >
      	<div className = "task-content-head">
      		<h2>任务1</h2>
      		<a className="edit-btn"></a>
      		<a className="confirm-btn"></a>
      		
      	</div>
      	<div className = "task-date">
      		<p>任务日期：2015-04-30</p>
  		</div>
  		<div className = "task-detail-content">
  			<h4>任务目标</h4>
  			<ul>
  				<li>掌握nodejs基本用法</li>
  				<li>学习模块化编程</li>
  				<li>了解web安全</li>
  			</ul>
  		</div>
		
      </div>
    );
  }
}

//包含左中有的内容组件
class MainContentComponent extends React.Component {
  render() {
    return ( <
      div className = "main-content clearfix" >
      <
      LeftTaskCategoryComponent / >
      <
      MiddleTaskListComponent / >
      <
      RightTaskContentComponent / >
      <
      /div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return ( <
      div className = "wrap-content" >
      <
      h1 className = "header" > GTD Tools <
      /h1>

      <
      MainContentComponent / >
      <
      /div>	
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
