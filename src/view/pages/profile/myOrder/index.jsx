import React, { useState } from "react";
import { Pagination } from "antd";
import { useEffect } from "react";
import "./myOrder.scss";
import billAPI from "api/billApi";

const orderStatuses = [
  "Tất cả",
  "Chờ thanh toán",
  "Vận chuyển",
  "Đang giao",
  "Hoàn thành",
  "Đã hủy",
  "Trả hàng/Hoàn tiền",
];

export const MyOrder = () => {
  // const [page, setPage] = useState(3);
  // const [limit, setLimit] = useState(10);
  // const [totalOrders, setTotalOrders] = useState(0);

  // const onChange = (page, pageSize) => {
  //   console.log(page, pageSize);
  //   setLimit(pageSize);
  //   setPage(page);
  // };

  // useEffect(() => {
  //   //call api
  //   // setListOrders
  //   // setTotalOrders
  // }, [page, limit]);

  const [listOrders, setListOrders] = useState([]);
  useEffect(() => {
    const getBill = async () => {
      const res = await billAPI.getBill();
      try {
        setListOrders(res.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getBill();
  }, []);

  return (
    <div className="my__order">
      <section className="VYJdTQ" aria-role="tablist">
        {orderStatuses.map((status, index) => (
          <a key={index} title={status}>
            <span className="_20hgQK">{status}</span>
          </a>
        ))}
      </section>

      {listOrders.map((item, index) => (
        <div className="product">
          <div className="product__image">
            <img
              src="https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn"
              alt="Product"
            />
          </div>
          <div className="product__info">
            <span className="product__status">{item.book_status}</span>
            <p className="product__name">Sach Nihongo</p>
            <p className="product__category">Sach Ngon Ngu</p>
            <span className="product__price">
              Thành tiền: {item.total_price}
            </span>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
};

{
  /* <Pagination
total={totalOrders} //listOrders.length: tong so order cua user do
current={page}
showTotal={(total, range) => {
  return `${range[0]}-${range[1]} of ${total} items`;
}}
onChange={onChange}
pageSize={limit}
defaultPageSize={20}
defaultCurrent={1}
/> */
}
