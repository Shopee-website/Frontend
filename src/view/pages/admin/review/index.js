import './index.scss'
import { useEffect, useState } from 'react'
import adminReviewApi from 'api/adminreviewAPI'

function AdminReview(){

    const [review, setReview] = useState([])

    useEffect(()=> {
        const getReview = async () =>{
            try {
                const res = await adminReviewApi.getAllReview()
                setReview(res.data.feedbacks.filter((item)=> item.User.name != 'Nguyen Duc Phu'))
            }
            catch(err){
                console.log(err)
            }
        }
        getReview()
    },[])


    const reviews = review.map((item)=> {
        return (
            <table className='admin-review-table'>
                <tr  className='admin-review-row'>
                    <td className='admin-review-product_name'>{item.Product.product_name}</td>
                    <td className='admin-review-user-name'>{item.User.name}</td>
                    <td className='admin-review-star'>{item.star}</td>
                    <td className='admin-review-content'>{item.content}</td>
                </tr>
            </table>
        )
    })


    return (
        <div>
            <h1 className='admin-review-header'>Danh sách review sản phẩm</h1>
                <table className='admin-review-table' >
                    <tr className='admin-review-row'>
                        <th className='admin-review-product_name'>Tên sản phẩm</th>
                        <th className='admin-review-user-name'>Người đánh giá</th>
                        <th className='admin-review-star'>Số sao</th>
                        <th className='admin-review-content'>Lời đánh giá</th>
                    </tr>
                </table>
                {reviews}
        </div>
    )
}

export default AdminReview