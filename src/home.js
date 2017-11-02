import React,{Component} from 'react';
import MetaData from './MetaData';
import TopNav from './layouts/TopNav';
import Slider from './layouts/Slider';
import Summary from './layouts/Summary';
import Today from './layouts/Today';
import RecentBlogs from './layouts/RecentBlogs';
import Footer from './layouts/Footer';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={

		};
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(){

	}
	render(){
		return(
			<div>
			<MetaData description='主页'/>
			<TopNav active='0'/>
			<Slider />
			<Summary />
			<Today />
			<RecentBlogs />
			<Footer />
			</div>
			);
	}
}
export default Home;
