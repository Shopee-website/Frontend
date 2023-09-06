import './index.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import formatPrice from 'components/format-price'
import adminproductApi from 'api/adminproductAPI'
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone';



function AdminProduct (){
    const [product, setProduct] = useState([])
    
    const [editID, setEditID] = useState(-1)
    const [title, setTitle]= useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [show, setShow] = useState(false)
    // Handle File
    const [files, setFiles] = useState([]);

  const onDrop = acceptedFiles => {
    setFiles([...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

        const getAllProduct = async () =>{
            try {
                const res = await adminproductApi.getAllAdminProduct()
                setProduct(res.data.rows.filter((item) => item.deletedAt === null))
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllProduct()
    }, [])

    ///  Remove a product from the list

    function removeProduct(id) {
        const newProducts = product.filter((item)=> item.id !== id);
        setProduct(newProducts)
        const deleteProduct = async (id) => {
            try {

                const res = await adminproductApi.deleteAdminProduct(id);
                console.log(res);
            }
            catch (err){
                console.log(err);
            }
        }
        deleteProduct(id);
    }

    // render the product 

     const arrProducts = currentItems.map((item)=> (
            item.id === editID ? 
            <EditProduct item = {item} product = {product} setProduct = {setProduct}/>
            :
            <table className='admin-product-list'>
                <tr key = {item.id}>
                    <td className='admin-product-name'>{item.product_name}</td>
                    <td className='admin-product-des'>{formatPrice(item.price)}</td>
                    <td className='admin-product-update'>
                        <button className='admin-product-btn'
                        onClick={()=>handleEdit(item.id)}
                        type = 'button'
                        >Sửa</button>
                    </td>
                    <td className='admin-product-delete'>
                        <button type='button' className='admin-product-btn' 
                        onClick={()=>removeProduct(item.id)}
                        >Xóa</button>
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
                d.id === item.id ? {...d, product_name : title } : d
            )
            setProduct(updatedData)
        }
        function handlePrice(e){
            const price = e.target.value;
            const updatedData = product.map((d)=> 
                d.id === item.id ? {...d, price : price } : d
            )
            setProduct(updatedData)
        }
    
        return (
            <table className='admin-product-list'>
                <tr>
                    <td className='admin-product-name'>
                        <input type = 'text'  name = 'title'
                        className='admin-product-update-inp'
                        value = {item.product_name} 
                        onChange = {handleTitle}                     
                        />
                    </td>
                    <td className='admin-product-des'>
                        <input type = 'text'   name = 'price'  
                         className='admin-product-update-inp'
                        value = {item.price}    
                        onChange = {handlePrice}  
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
        const title =  e.target.elements.title.value;
        const price =  e.target.elements.price.value;
        const quantity = e.target.elements.quantity.value;
        const id = product.length + 1;
        const newProduct = {
            id : id,
            product_name : title,
            price : parseInt(price),
            quantity : parseInt(quantity)
        }
        const formData = new FormData();
        files.forEach(file => {
            formData.append('image', file);
        });
        const addProduct = async (params) => {
            try {
                const res = await adminproductApi.addAdminProduct(params);
                console.log(res);
            }
            catch (err) {
                console.error(err);
            }
        }
        addProduct({
            product_name : title,
            price : parseInt(price),
            details : [
                {
                    color : "white",
                    quantity : parseInt(quantity)
                }
            ],
            images : formData
        }, 
        {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        setTitle('')
        setPrice(0)
        setQuantity(0)
        setFiles([])
       setProduct(prev => prev.concat(newProduct))
    }

    function handleUpdate (event){
        event.preventDefault();
        const title = event.target.elements.title.value
        const price = event.target.elements.price.value
        const updatedData = product.map(d => 
            d.id === editID ? {...d, product_name : title,  price : price} :d    
        )
        const update = async (id) => {
            try {
                const res = await adminproductApi.updateAdminProduct(id);
                console.log(res)
            }
            catch (err){
                console.log(err)
            }
        }
        update(editID)
        setEditID(-1)
        setProduct(updatedData)
    }
   
    // add a product
    function handleAdd(e) {
        e.preventDefault();
        setShow(!show)
    }
    

    
    return (
        <div className='admin-product-wrap'>
                            <div className='admin-product-add'>
                                <button className='admin-product-add-button' 
                                onClick={handleAdd}
                                >Thêm sản phẩm</button>
                                <form 
                                onSubmit={handleValues}
                                >
                                    {show ?
                                        <>
                                        <label for = "title" className='admin-product-label'>Nhập tên sản phẩm</label>
                                        <input type = 'text' placeholder = 'Nhập tên sản phẩm' 
                                        className='admin-product-add-name' name = 'title' id = "title"
                                        onChange={(e)=>setTitle(e.target.value)}
                                        value = {title}
                                        />
                                        <label for = "quantity" className='admin-product-label'>Nhập số lượng sản phẩm</label>
                                        <input type = "text" className='admin-product-add-quantity' name = "quantity"  
                                        id = "quantity" value = {quantity} placeholder = "Nhập số lượng" 
                                        onChange={(e)=>setQuantity(e.target.value)}
                                        />
                                        <label for = "price" className='admin-product-label'>Nhập số tiền</label>
                                        <input type='number' placeholder='Nhập số tiền (đơn vị đđ)' name = 'price'
                                        id = "price"
                                        className='admin-product-add-price'
                                        onChange={(e)=>setPrice(e.target.value)}
                                        value = {price}
                                        /><br/>
                                        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                                            <input {...getInputProps()} />
                                            {isDragActive ? (
                                            <p className='admin-product-img-des'>Kéo và thả các tệp tin vào đây ...</p>
                                            ) : (
                                            <p className='admin-product-img-des'>Kéo và thả hoặc nhấp để chọn các tệp tin</p>
                                            )}
                                            <ul className='admin-product-img-list'>
                                            {files.map((file, index) => (
                                                <li key={index}
                                                    className='admin-product-img-item'
                                                >{file.name}</li>
                                            ))}
                                            </ul>
                                        </div>
                                        <button className='admin-product-add-btn'
                                        >Thêm</button>
                                        </> : <div></div>
                                    }
                                    
                                </form> 
                        </div>
                        <form 
                        onSubmit={handleUpdate}
                        >

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