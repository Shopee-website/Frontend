import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import './userList.scss'
import userApi from 'api/userApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function User(props) {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [editID, setEditID] = useState(-1)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [array, setArray] = useState([])
    const [users, setUsers] = useState([]);
    const [active, setActive] = useState(0)
    // handle show password
    const [showPassword, setShowPassword] = useState(false);
    useEffect (() => {
    const fetchUser = async () => {
        const userList = await userApi.getAllUser();
        // console.log(userList.data.users)
        setUsers(userList.data.users);
        setInitLoading(false);
        setData(userList.data.users);
        setArray(userList.data.users)
        setList(userList.data.users);
    }

    fetchUser();
    }, [])

    // Handle paging
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  
    // Tạo các nút phân trang
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    // Xử lý thay đổi trang
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      setActive(pageNumber)
    };


    /// Remove user 
    function removeUser(id) {
      const newUsers = list.filter((item)=> item.id !== id);
      setList(newUsers)
      // const deleteUser = async (params) => {
      //   try {
      //     const res = userApi.deleteUser(params)
      //     console.log(res)
      //   }
      //   catch (err) {
      //     console.log(err)
      //   }
      // }
      // deleteUser({
      //   id : id
      // })
  }
    // Edit user

    function handleEdit (id){
      setEditID(id)
    }

    function handleUpdate (event){
      event.preventDefault();
      const name = event.target.elements.name.value
      const email = event.target.elements.email.value
      const updatedData = list.map(d => 
          d.id === editID ? {...d, name : name, email : email} :d    
      )
      setEditID(-1)
      setList(updatedData)
  }

    function EditUser({item , list, setList}){
      function handleName(e){
          const name = e.target.value;
          const updatedData = list.map((d)=> 
              d.id === item.id ? {...d, name : name } : d
          )
          setList(updatedData)
      }
      function handleEmail(e){
          const email = e.target.value;
          const updatedData = list.map((d)=> 
              d.id === item.id ? {...d, email : email } : d
          )
          setList(updatedData)
      }
  
      return (
      <form onSubmit={handleUpdate}>
        <div className='admin-user-wrap'>
          <div className='admin-user-sideleft'>

            <div>
              <img src = {item.avatar_url} className='admin-user-image'/>
            </div>
            <div>
              <input  type = "text" name = "name" value = {item.name} 
              onChange={handleName} className='admin-user-name'/>
              <input type = "text" name = "email" value = {item.email}
                onChange={handleEmail} className='admin-user-email'
              />
            </div>
          </div>
          <div className='admin-user-sideright'>

            <div className='admin-user-role'>User</div>
            <div>
              <button className='admin-user-update'>Cập nhập</button>
              <button className='admin-user-remove'>Xóa</button>
            </div>
          </div>
          </div>
      </form>
     
      )
  }
  // Add user
  function handleAdd(e){
    e.preventDefault();
    const name =  e.target.elements.name.value;
    const email =  e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const id = list.length + 1;
    const newList = {
        id : id,
        name : name,
        email : email
    }
    setName('')
    setEmail('')
    setPassword('')
   setList(prev => prev.concat(newList))
}
  //handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = list.filter((item) =>
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    const id = results.map((item) => item.id)
    setList(list.filter((item)=> id.includes(item.id)=== true));
    setTimeout(()=> {
      setList(array)
    }, 5000)
  };

  //handle show pass
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

    return (
        <>
        <div className='user-list-wrapper'>
          <div>
            <form onSubmit={handleSubmit}>
              <input type = "text" placeholder='Nhập tên user' 
                value = {searchTerm}
                onChange={handleSearch}
                className='admin-user-search'
              />
              <button type="submit" className='admin-user-search-btn'>Tìm kiếm</button>
            </form>
          </div>
            <div className='user-list-header'>
                <p>Danh sách người dùng</p>
                <button className='admin-user-add'
                  onClick={()=> setShow(!show)}
                >Thêm người dùng</button>
            </div>
            {show ? <div className='admin-user-form-add'>
              <form onSubmit={handleAdd}>
                <label for = "name" className='admin-user-label'>Nhập tên</label><br/>
                <input type = "text" name = "name" value = {name}
                id = "name" placeholder='Nhập tên' className='admin-user-input'
                onChange={(e)=>setName(e.target.value)}
                /><br/>
                <label for = "email" className='admin-user-label'>Nhập Email</label><br/>
                <input type = "text" name = "email" value = {email}
                id = "email" placeholder='Nhập email' className='admin-user-input'
                onChange={(e)=>setEmail(e.target.value)} 
                /><br/>
                <label for = "password" className='admin-user-label'>Nhập mật khẩu</label><br/>
                <input  type={showPassword ? 'text' : 'password'} name = "password" value = {password}
                id = "password" placeholder='Nhập mật khẩu' className='admin-user-input'
                onChange={(e)=> setPassword(e.target.value)}
                />
                <span
                  className="admin-user-password-toggle"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} 
                  />
                </span>
                
                <br/>
                <button className='admin-user-add-btn'>Thêm</button>
              </form>
            </div> : <div></div>}
            <div className='user-list-content'>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={currentItems}
                renderItem={(item) => (
                  item.id === editID ? 
                <EditUser item = {item} list = {list} setList = {setList}/>
                  :
                <List.Item
                    actions={[<Button className="list-loadmore-edit"
                      onClick={()=>handleEdit(item.id)}
                    >Sửa</Button>, 
                    
                    <Button className="list-loadmore-remove"
                      onClick={()=>removeUser(item.id)}
                    >Xóa</Button>]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar_url} />}
                        title={<p>{item.name ? item.name : "Mặc định"}</p>}
                        description={item.email}
                    />
                    <div>User</div>
                    </Skeleton>
                </List.Item>
                )}
            />
            </div>
        </div>
        <ul className='admin-user-pagination'>
              {pageNumbers.map((pageNumber) => (
              <li key={pageNumber} className='admin-user-pagination-list'>
                  <button 
                      value = {pageNumber} 
                  onClick={() => handlePageChange(pageNumber)}
                      className= {active === pageNumber ? 'admin-user-pagination-btn admin-user-active' : 'admin-user-pagination-btn'}
                  >{pageNumber}</button>
              </li>
              ))}
          </ul>
      </>
    );
}

export default User;
