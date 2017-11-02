import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

class MetaData extends Component{
	render(){
		let meta={
			title:this.props.title,
			meta:{
				charset:'utf-8',
				name:{
					keywords:this.props.keywords||"fz bookstore",
					description:this.props.description||"hello",
					viewport:'width=device-width'
				}
			}
		};
		return(
			<DocumentMeta {...meta}/>
			);
	}
}
export default MetaData;