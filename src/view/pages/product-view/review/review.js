import {useEffect, useState } from 'react'
import './review.scss'
import avatar from 'assets/images/avatar-review.jpg'
import {Rating} from '@mui/material'
import reviewApi from 'api/reviewAPI'
function Review(props) {
    const [review, setReview] = useState([])
    const [mainReview,setMainReview] = useState([])
    useEffect (()=> {
        
        const fetchFeedback = async () => {
            try {
                const res =  await reviewApi.getAllReview(props.data)
                // console.log(res)
                setReview(res.data.feedback)
                setMainReview(res.data.feedback)
            } 
            catch (err) {
                console.log(err)
            }
    }
        fetchFeedback()
    }, [])
    // Tính số sao trung bình của sản phẩm hiển thị ra màn hình
    const reviewLength = mainReview.length;
    const reviewArray = mainReview
    const totalStar = mainReview.reduce((initial , current) => {
        var total = initial + current.star;
        return total;
    }, 0)


    const arrReviews = review.map((review, index)=> {
        return (
            <div className='review-detail'>
                <img  src= {avatar} className="review-avatar"/>
                <div className='review-content'>
                    <div className='review-username'>
                        {review.User.name}
                    </div>
                    <div className='review-icon'>
                        <Rating name="rating-read" defaultValue={review.star} precision={0.5} size = "small" readOnly />
                    </div>
                    <div className='review-datetime'>
                    {review.createdAt} <span className='review-line'></span> Phân loại hàng: 03
                    </div>
                    <div className='review-body'>
                        {review.content}
                    </div>
                </div>
            </div>
        )
    })

    return (  
        <div className='review-container'>
            <div className='review-wrap'>
            <h3 className='review-header'>ĐÁNH GIÁ SẢN PHẨM</h3>
            <div className = 'review-wrap_box'>
            <div className='review-box'>
                <div className='review-general_rating'>
                    <span style = {{marginLeft : '12px', color : '#d1011b', fontSize : '30px'}}>
                      { review.length >= 1 ?   totalStar/reviewLength : 0} 
                      </span> trên 5 <br/><br/> 
                    <Rating name="rating-read" value = {review.length >= 1 ? 5 : 0} 
                    precision={0.5} size = "large" readOnly />
                </div>
                <div className='review-list'>
                    <button className='review-btn review-active'
                    onClick = {()=>setReview(mainReview)}
                    >Tất cả</button>
                    <button className='review-btn' onClick={()=>setReview(mainReview.filter(r => r.star === 5))}>
                        5 sao ({mainReview.filter(r=> r.star ===5).length})</button>
                    <button className='review-btn' onClick={()=>setReview(mainReview.filter(r => r.star === 4))}>
                        4 sao ({mainReview.filter(r=> r.star ===4).length})</button>
                    <button className='review-btn' onClick={()=>setReview(mainReview.filter(r => r.star === 3))}>
                        3 sao ({mainReview.filter(r=> r.star ===3).length})</button>
                    <button className='review-btn' onClick={()=>setReview(mainReview.filter(r => r.star === 2))}>
                        2 sao ({mainReview.filter(r=> r.star ===2).length})</button>
                    <button className='review-btn' onClick={()=>setReview(mainReview.filter(r => r.star === 1))}>
                        1 sao ({mainReview.filter(r=> r.star ===1).length})</button>
                </div>
            </div>
            </div>
            <div className='review-content'>
                {arrReviews}
            </div>
            </div>
        </div>
    );
}

export default Review;