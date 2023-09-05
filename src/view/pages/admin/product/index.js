import './index.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import adminproductApi from 'api/adminproductAPI'
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'



function AdminProduct (){
    const [product, setProduct] = useState([])
    
    const [editID, setEditID] = useState(-1)
    const [title, setTitle]= useState('')
    const [category, setCategory]= useState('')
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(0)
    const [show, setShow] = useState(false)
    // Handle paging
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);
  
    // Tạo các nút phân trang
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(product.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    // Xử lý thay đổi trang
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    /// GET API
    useEffect (()=> {
        axios.get('https://fakestoreapi.com/products')
        .then (res => {
        setProduct(res.data)
        })
        .catch(err => console.log(err));
    }, [])

    ///  Remove a product from the list

    function removeProduct(id) {
        const newProducts = product.filter((item)=> item.id !== id);
        setProduct(newProducts)
    }

    // render the product 

     const arrProducts = currentItems.map((item)=> (
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

        /// Update the product

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
        setPrice(0)
        setImage(null)
       const title =  e.target.elements.title.value;
       const category =  e.target.elements.category.value;
       const id = product.length + 1;
    //    const price =  e.target.elements.price.value;
    //    const file = e.target.elements.file.value
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
   
    // add a product
    function handleAdd(e) {
        e.preventDefault();
        setShow(!show)
    }
    
    // function handlePage (e){
    //     e.preventDefault();
    //     setPage(prev => prev + 1)
    // }



    
    return (
        <div className='admin-product-wrap'>
                            <div className='admin-product-add'>
                                <button className='admin-product-add-button' onClick={handleAdd}>Thêm sản phẩm</button>
                                <form onSubmit={handleValues}>
                                    {show ?
                                        <><br/><br/>
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
                                        <input type='file' name = 'file' placeholder='Tải hình ảnh sản phẩm'
                                        className='admin-product-add-image'
                                        onChange={(e)=>setImage(e.target.value)}
                                        value = {image}
                                        />
                                        <input type='number' placeholder='Nhập số tiền (đơn vị đđ)' name = 'price'
                                        className='admin-product-add-price'
                                        onChange={(e)=>setPrice(e.target.value)}
                                        value = {price}
                                        />
                                        <br/>
                                        <button className='admin-product-add-btn'
                                        >Thêm</button>
                                        </> : <div></div>
                                    }
                                    
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
                        <ul className='admin-product-pagination'>
                            {pageNumbers.map((pageNumber) => (
                            <li key={pageNumber} className='admin-product-pagination-list'>
                                <button onClick={() => handlePageChange(pageNumber)}
                                    className='admin-product-pagination-btn'
                                >{pageNumber}</button>
                            </li>
                            ))}
                        </ul>

                        </div>
    )
}

export default AdminProduct