import './index.scss'
import { useEffect, useState } from 'react'
import adminReviewApi from 'api/adminreviewAPI'

function AdminReview(){

    const [review, setReview] = useState([])

    useEffect(()=> {
        const getReview = async () =>{
            try {
                const res = await adminReviewApi.getAllReview()
                console.log(res.data.feedbacks)
                setReview(res.data.feedbacks)
            }
            catch(err){
                console.log(err)
            }
        }
        getReview()
    },[])

    return (
        <div>
            
        </div>
    )
}

export default AdminReview