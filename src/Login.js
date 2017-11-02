import React,{ Component } from 'react';


class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			isToggleOn:false,
			value:''
		};
		//this.clck=this.clck.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleForm=this.handleForm.bind(this);
	}
	componentDidMount(){
		setInterval(() =>this.clck(),1000);

	}
	clck(){
		this.setState({
			date:new Date()
		});
	}
	handleChange(){
		this.setState(prevState =>({
			isToggleOn:!prevState.isToggleOn,
		}));
	}
	handleForm(event){
		this.setState({
			value:event.target.value
		});
	}
	handleSubmit(event,props){
			window.location.href='/home';
			event.preventDefault();
		
	}
	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		<div className="clockPosition">
                <span className="clockcss">{this.state.date.toLocaleTimeString()}</span></div>
            <div className="mycenter">
            <div className="mysign">
                <div className="col-lg-11 loginLabel">
                    <h2>请登录</h2>
                </div>
                <div className="col-lg-10">
                   <span className="loginLabel2">用户名:</span>
                   <input type="text" className="form-control" value={this.state.value} onChange={this.handleForm} name="username" placeholder="请输入账户名"/>
                </div>
                <div className="col-lg-10"></div>
                <div className="col-lg-10">&nbsp;&nbsp;
                 <span className="loginLabel2">密码:</span>
                 <input type="password" className="form-control" name="password" placeholder="请输入密码" required autofocus/>
                 <div style={{height:40}}></div>
                </div>
                <div className="col-lg-10">
                    <button type="submit" className="btn btn-success" style={{marginLeft:60}}>登录</button>
                    <button type="button" className="btn btn-success" style={{marginLeft:60}}>注册</button>
                     <p>{this.state.isToggleOn?"":"登陆失败"}</p>
                </div>
            </div>
        </div>
        </form>
		);
	}
}
export default Login;