import './index.scss'
import { useEffect, useState } from 'react'
import adminReviewApi from 'api/adminreviewAPI'

function AdminReview(){

    const [review, setReview] = useState([])
    const [mainReview, setMainReview] = useState([])
    const [active, setActive] = useState(0)
    const [active1, setActive1] = useState(0)
    const [currentActive, setCurrentActive] = useState(0)

    useEffect(()=> {
        const getReview = async () =>{
            try {
                const res = await adminReviewApi.getAllReview()
                setReview(res.data.feedbacks.filter((item)=> item.User.name != 'Nguyen Duc Phu'))
                setMainReview(res.data.feedbacks.filter((item)=> item.User.name != 'Nguyen Duc Phu'))
            }
            catch(err){
                console.log(err)
            }
        }
        getReview()
    },[])


     // Handle paging
     const [currentPage, setCurrentPage] = useState(1);
     const [itemsPerPage, setItemsPerPage] = useState(10);
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = mainReview.slice(indexOfFirstItem, indexOfLastItem);
   
     // Tạo các nút phân trang
     const pageNumbers = [];
     for (let i = 1; i <= Math.ceil(mainReview.length / itemsPerPage); i++) {
       pageNumbers.push(i);
     }
   
     // Xử lý thay đổi trang
     const handlePageChange = (pageNumber) => {
       setCurrentPage(pageNumber);
       setActive(pageNumber)
     };
 

    // handle Active and count number of reviews
    function handleActive(e) {
        const id = parseInt(e.target.id)
        if (id !=0)
        setMainReview(review.filter(r => r.star === id))
        else setMainReview(review)
        setCurrentActive(id)
    }
 

    const reviews = currentItems.map((item)=> {
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
                <div className='admin-review-btn'>
                    <button className= {currentActive === 0 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                        id = {0}
                        onClick={handleActive}
                    >Tất cả ({review.length})</button>
                    <button className= {currentActive === 1 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                       id = {1}
                        onClick={handleActive}
                    >1 sao ({review.filter(r => r.star === 1).length})</button>
                    <button className= {currentActive === 2 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                       id = {2}
                        onClick={handleActive}                    
                    >2 sao ({review.filter(r => r.star === 2).length})</button>
                    <button className= {currentActive === 3 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                       id = {3}
                        onClick={handleActive}                    
                    >3 sao ({review.filter(r => r.star === 3).length})</button>
                    <button className= {currentActive === 4 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                       id = {4}
                        onClick={handleActive}                    
                    >4 sao ({review.filter(r => r.star === 4).length})</button>
                    <button className= {currentActive === 5 ? 'admin-review-star-btn admin-review-active-btn' : 'admin-review-star-btn'}
                       id = {5}
                        onClick={handleActive}                    
                    >5 sao ({review.filter(r => r.star === 5).length})</button>
                </div>
                <table className='admin-review-table' >
                    <tr className='admin-review-row'>
                        <th className='admin-review-product_name'>Tên sản phẩm</th>
                        <th className='admin-review-user-name'>Người đánh giá</th>
                        <th className='admin-review-star'>Số sao</th>
                        <th className='admin-review-content'>Lời đánh giá</th>
                    </tr>
                </table>
                {reviews}
                <ul className='admin-review-pagination'>
                    {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className='admin-review-pagination-list'>
                        <button 
                            value = {pageNumber} 
                        onClick={() => handlePageChange(pageNumber)}
                            className= {active === pageNumber ? 'admin-review-pagination-btn admin-review-active' : 'admin-review-pagination-btn'}
                        >{pageNumber}</button>
                    </li>
                    ))}
                </ul>
        </div>
    )
}

export default AdminReview