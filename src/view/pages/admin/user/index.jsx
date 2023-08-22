import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import './userList.scss'
import userApi from 'api/userApi';

const count = 10;

const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function User(props) {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const [users, setUsers] = useState([]);
    useEffect (() => {
    const fetchUser = async () => {
        const userList = await userApi.getAllUser();
        // console.log(userList.users[0].avatar_url);
        setUsers(userList.users);
    }

    fetchUser();
    }, [])



    useEffect(() => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          setInitLoading(false);
          setData(res.results);
          setList(res.results);
        });
    }, []);


    const onLoadMore = () => {
      setLoading(true);
      setList(
        data.concat(
          [...new Array(count)].map(() => ({
            loading: true,
            name: {},
            picture: {},
          })),
        ),
      );
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          const newData = data.concat(res.results);
          setData(newData);
          setList(newData);
          setLoading(false);
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        });
    };


    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={onLoadMore}>loading more</Button>
        </div>
      ) : null;


    return (
        <>
        <div className='user-list-wrapper'>
            <div className='user-list-header'>
                <p>Danh sách người dùng</p>
            </div>
            <div className='user-list-content'>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                <List.Item
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-remove">remove</a>]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={<a href="https://ant.design">{item.name?.last}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>User</div>
                    </Skeleton>
                </List.Item>
                )}
            />
            </div>
        </div>
      </>
    );
}

export default User;
