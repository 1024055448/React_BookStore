import React,{Component} from 'react';
import MetaData from './MetaData';
import TopNav from './layouts/TopNav';
import Footer from './layouts/Footer';
import ContactMe from './widget/ContactMe';

class Contact extends Component{
	
	render(){
		return(
			<div>
				<MetaData />
				<TopNav active="99" />
				<ContactMe email="fz1024055448@qq.com" git_address="https://github.com/1024055448" blog="http://www.cnblogs.com/fz1024055448" imgurl="http://7xi8d6.com1.z0.glb.clouddn.com/20171027114026_v8VFwP_joanne_722_27_10_2017_11_40_17_370.jpeg"/>
				<Footer />
			</div>
			);
	}
}
export default Contact;