import React,{Component} from 'react';

class BookSummary extends Component{
	state={};
	componentDidMount(){
		fetch('http://api.rsywx.com/book/summary')
		 .then(response => {
        	return response.json();
        })
		 .then(json=>{
		 	let summary=json.out.summary[0];
		 	let last=json.out.last[0];
		 	let formatter=new Intl.NumberFormat('en-US',{
		 		minimumFractionDigits:0
		 	});
		 	let pcd=new Date(last.purchdate);
		 	let y=pcd.getFullYear();
		 	let m=String(pcd.getMonth()+1).padStart(2,'0');
		 	let d=String(pcd.getDate()).padStart(2,'0');
		 	this.setState({
		 		bc:formatter.format(summary.bc),
		 		wc: formatter.format(summary.wc),
          		pc: formatter.format(summary.pc),
          		purchdate: y+"年"+m+"月"+d+"日",
          		id:last.bookid,
          		title:last.title,
          		author:last.author
		 	});
		 });
	}
	render(){
		return(
			<div className="col-md-3 feature">
			<h3><a href="http://www.cnblogs.com/fz1024055448"><i className="glyphicons pen"></i>收藏</a></h3>
			{this.state.purchdate}收藏的书为{this.state.author}的
				<a href={"/books/"+this.state.id+".html"}>《{this.state.title}》</a>
			</div>
			);
	}
}
export default BookSummary;