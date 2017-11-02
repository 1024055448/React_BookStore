import React,{Component} from 'react';
import NormalTitle from '../widget/NormalTitle';
import SpecialTitle from '../widget/SpecialTitle';

class Slider extends Component{
	render(){
		return(
			<div>
			<NormalTitle />
			<SpecialTitle />
			</div>
			);
	}
}
export default Slider;