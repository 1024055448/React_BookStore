import React,{Component} from 'react';

class ContactMe extends Component{
	constructor(props){
		super(props);
		this.state={
			imgurl0:'',
			imgurl1:'',
			imgurl2:''
		};
	}
	componentDidMount(){
		fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1')
		.then(res=>{
			return res.json();
		})
		.then(json=>{
			let result0=json.results[0];
			let result1=json.results[1];
			let result2=json.results[2];
			let result3=json.results[3];
			this.setState({
				imgurl0:result0.url,
				imgurl1:result1.url,
				imgurl2:result2.url,
				imgurl3:result3.url,
			});
		});
	}
	render(){
		return(

			<div className="contact-main">
				<h3 className="email-contact">联系邮箱:&nbsp;&nbsp;
				<strong style={{color:'#D0D0D0'}}>{this.props.email}</strong></h3>
				<h3 className="email-contact">github地址:&nbsp;&nbsp;
				<strong style={{color:'#D0D0D0'}}>{this.props.git_address}</strong></h3>
				<h3 className="email-contact">blog地址:&nbsp;&nbsp;
				<strong style={{color:'#D0D0D0'}}>{this.props.blog}</strong></h3>
				<br/>
				
				<img src={this.state.imgurl0} alt="福利找不到了啊" style={{height:300,width:300}}/>
				<img src={this.state.imgurl1} alt="福利找不到了啊" style={{height:300,width:300}}/>
				<img src={this.state.imgurl2} alt="福利找不到了啊" style={{height:300,width:300}}/>
				<img src={this.state.imgurl3} alt="福利找不到了啊" style={{height:300,width:300}}/>
			</div>
			);
	}
}
export default ContactMe;