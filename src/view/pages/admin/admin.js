import './admin.scss'
import shopee from '../../../assets/images/logo-shopee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBill, faList, faDiamond, faHouse } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import axios from 'axios'

import AddProduct from './add-product'
import userApi from 'api/userApi'
import User from './user'


function Admin() {

    const [show, setShow] = useState(1);
    const [product, setProduct] = useState([])
 
    const [editID, setEditID] = useState(-1)
    const [title, setTitle]= useState('')
    const [category, setCategory]= useState('')

    const [user, setUser] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    useEffect(()=> {
        const fetchProducts = async () => {
            // const params = {_limit: 30}
            const userList = await userApi.getAllUser();
            setUser(userList.users);
        }
        fetchProducts();
    }, [])

    function addProduct () {
        setShowAdd(!showAdd);
    }
  

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
        // const deleteProducts = async (id) => {
        //     try {
        //         let res = await axios.delete("https://fakestoreapi.com/products", {
        //             data: { id }
        //         });
        //         console.log("Product was deleted",res);
        //     } catch(err) {
        //         console.log("there was an error", err)
        //     }
        // }
        // deleteProducts()
    }
    


    const arrProducts = product.map((item)=> (
            item.id === editID ? 
            <EditMember item = {item} product = {product} setProduct = {setProduct}/>
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


    function EditMember({item , product, setProduct}){
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
        <div className='admin-container'>
            <div className='admin-header'>
                <div>
                    <img src = {shopee} alt = 'anh shopee' className='admin-logo-img'/>
                </div>
                <div style={{fontSize : '20px'}}>
                    Admin 
                </div>
            </div>
            <div className='admin-body'>
                <div className='admin-navbar'>
                    <ul className = 'admin-navbar-item'>
                        <li className = 'admin-navbar-list'>
                            <button onClick={()=>setShow(1)}>
                            <FontAwesomeIcon icon = {faHouse} className= 'admin-navbar-icon'/>
                            Trang chủ Admin
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick= {()=>setShow(2)}>                               
                            <FontAwesomeIcon icon = {faDiamond} className= 'admin-navbar-icon'/>
                            Quản lý sản phẩm
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick={()=>setShow(3)}>
                            <FontAwesomeIcon icon = {faUser}  className= 'admin-navbar-icon'/>
                            Quản lý user
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick = {()=>setShow(4)}>
                            <FontAwesomeIcon icon = {faList} className= 'admin-navbar-icon'/>
                            Quản lý review sản phẩm
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick = {()=>setShow(5)}>
                            <FontAwesomeIcon icon = {faMoneyBill} className= 'admin-navbar-icon'/>
                            Thống kê thu nhập
                            </button>
                            </li>
                    </ul>
                </div>
                <div className='admin-content'>
                    <div className= {show === 1 ? 'admin-main-web active' : 'admin-main-web'}>
                        <div className='admin-main-header'>Trang chủ web admin</div>
                        <div>
                            
                        </div>
                    </div>
                    <div className= {show === 2 ? 'admin-product active' : 'admin-product'}>
                        <div className='admin-product-wrap'>
                            <div className='admin-product-add'>

                                <button 
                                onClick={addProduct}
                                className='admin-product-add-btn'
                                >Thêm sản phẩm 
                                </button>
                                {showAdd && <AddProduct />}
                                {/* <form onSubmit={handleValues}>
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
                                    
                                </form>  */}
                                
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
                    </div>
                    <div className= {show === 3 ? 'admin-user active' : 'admin-user'}>
                        {/* <div className='admin-main-header'>Quản lý user</div> */}
                        <div>
                            <User /> 
                        </div>
                    </div>
                    <div className= {show === 4 ? 'admin-review active' : 'admin-review'}>
                        
                    </div>
                    <div className= {show === 5 ? 'admin-money active' : 'admin-money'}>
                       
                    </div>
                </div>
            </div>
        </div>
     );

      

  
}

export default Admin;