import '../admin.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import adminproductApi from 'api/adminproductAPI'
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'



function AdminProduct (){
    const [product, setProduct] = useState([])
    
    const [editID, setEditID] = useState(-1)
    const [title, setTitle]= useState('')
    const [category, setCategory]= useState('')

    useEffect (()=> {
        axios.get('https://fakestoreapi.com/products')
        .then (res => {
        setProduct(res.data)
        })
        .catch(err => console.log(err));
    }, [])


    function removeProduct(id) {
        const newProducts = product.filter((item)=> item.id !== id);
        setProduct(newProducts)
    }

     const arrProducts = product.map((item)=> (
            item.id === editID ? 
            <EditProduct item = {item} product = {product} setProduct = {setProduct}/>
            :
            <table className='admin-product-list'>
                <tr key = {item.id}>
                    <td className='admin-product-name'>{item.title}</td>
                    <td className='admin-product-des'>{item.category}</td>
                    <td className='admin-product-update'>
                        <button className='admin-product-btn'
                        onClick={()=>handleEdit(item.id)}
                        type = 'button'
                        >Sửa</button>
                    </td>
                    <td className='admin-product-delete'>
                        <button type='button' className='admin-product-btn' onClick={()=>removeProduct(item.id)}>Xóa</button>
                    </td>
                </tr>
            </table>
        ))

    function handleEdit (id){
        setEditID(id)
    }
    function EditProduct({item , product, setProduct}){
        function handleTitle(e){
            const title = e.target.value;
            const updatedData = product.map((d)=> 
                d.id === item.id ? {...d, title : title } : d
            )
            setProduct(updatedData)
        }
        function handleCategory(e){
            const category = e.target.value;
            const updatedData = product.map((d)=> 
                d.id === item.id ? {...d, category: category } : d
            )
            setProduct(updatedData)
        }
    
        return (
            <table className='admin-product-list'>
                <tr>
                    <td className='admin-product-name'>
                        <input type = 'text'  name = 'title'
                        className='admin-product-update-inp'
                        value = {item.title} 
                        onChange = {handleTitle}                     
                        />
                    </td>
                    <td className='admin-product-des'>
                        <input type = 'text'   name = 'category'  
                         className='admin-product-update-inp'
                        value = {item.category}    
                        onChange = {handleCategory}  
                        />
                    </td>
                    <td className='admin-product-update'>
                        <button className='admin-product-btn'
                        
                        >Cập nhập</button>
                    </td>
                    <td className='admin-product-delete'>
                        <button className='admin-product-btn'>Xóa</button>
                    </td>
                </tr>
            </table>
        )
    }
    function handleValues(e){
        e.preventDefault();
        setTitle('')
       setCategory('')
       const title =  e.target.elements.title.value;
       const category =  e.target.elements.category.value;
       const id = product.length + 1;
       const newProduct = {
        id : id,
        title : title,
        category : category
       }
       setProduct(prev => prev.concat(newProduct))
    }

    function handleUpdate (event){
        event.preventDefault();
        const title = event.target.elements.title.value
        const category = event.target.elements.category.value
        const updatedData = product.map(d => 
            d.id === editID ? {...d, title : title,  category : category} :d    
        )
        setEditID(-1)
        setProduct(updatedData)

    }
   

    

    return (
        <div className='admin-product-wrap'>
                            <div className='admin-product-add'>
                                <form onSubmit={handleValues}>
                                    <input type = 'text' placeholder = 'Nhập tên sản phẩm' 
                                    className='admin-product-add-name' name = 'title'
                                    onChange={(e)=>setTitle(e.target.value)}
                                    value = {title}
                                    />
                                    <input type = 'text' placeholder = 'Nhập mô tả' name = 'category'
                                    className='admin-product-add-des'
                                    value = {category}
                                    onChange={(e)=>setCategory(e.target.value)}
                                    />
                                    <button className='admin-product-add-btn'>Thêm</button>
                                </form> 
                        </div>
                        <form onSubmit={handleUpdate}>

                            <table className='admin-product-list'>
                            <tr>
                            <th className='admin-product-name'>Tên sản phẩm</th>
                            <th className='admin-product-des'>Mô tả</th>
                            <th className='admin-product-update'>Sửa</th>
                            <th className='admin-product-delete'>Xóa</th>
                            </tr>
                            </table>
                            {arrProducts}
                        </form>

                        </div>
    )
}

export default AdminProduct