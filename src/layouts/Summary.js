import React,{Component} from 'react';
import BlogSummary from '../widget/BlogSummary';
import BookSummary from '../widget/BookSummary';
import ReadingSummary from '../widget/ReadingSummary';

class Summary extends Component{
	render(){
		return(
			<div className="widewrapper">
			  <div className="container">
			  	 <div className="row features">
					<BlogSummary />
					<BookSummary />
					<ReadingSummary />
					<div className="col-md-3 feature">
                    <h3><a href="http://www.cnblogs.com/fz1024055448"><i className="glyphicons notes_2"></i>维客</a></h3>
                    <p>这里是我整理的一些资源，主要是电子书和我最喜爱的<strong><a href="/misc/lakers/2016">湖人队的赛程</a></strong>。</p>
                    <p>还可以和我<strong><a href="/contact">取得联系</a></strong>。</p>
                    </div>
				 </div>
			  </div>
			</div>
			);
	}
}
export default Summary;