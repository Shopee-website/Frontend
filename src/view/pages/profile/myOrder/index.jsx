import React, { useState } from "react";
import { Pagination } from "antd";

import "./myOrder.scss";

const orderStatuses = [
  "Tất cả",
  "Chờ thanh toán",
  "Vận chuyển",
  "Đang giao",
  "Hoàn thành",
  "Đã hủy",
  "Trả hàng/Hoàn tiền",
];

const listOrders = [
  {
    url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
    product_name: "Sach Minna ni hongo",
    category_name: "Sach Giao Khoa",
    status: "Dang giao",
    total_money: 123,
  },
  {
    url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
    product_name: "Sach Minna ni hongo",
    category_name: "Sach Giao Khoa",
    status: "Dang giao",
    total_money: 123,
  },
  {
    url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
    product_name: "Sach Minna ni hongo",
    category_name: "Sach Giao Khoa",
    status: "Dang giao",
    total_money: 123,
  },
  // {
  //     url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
  //     product_name: "Sach Minna ni hongo",
  //     category_name: "Sach Giao Khoa",
  //     status: "Dang giao",
  //     total_money: 123,
  // },
  // {
  //     url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
  //     product_name: "Sach Minna ni hongo",
  //     category_name: "Sach Giao Khoa",
  //     status: "Dang giao",
  //     total_money: 123,
  // },
  // {
  //     url: "https://down-vn.img.susercontent.com/file/8e9d9c9ba4d7f5396dc8a4d58ff52d95_tn",
  //     product_name: "Sach Minna ni hongo",
  //     category_name: "Sach Giao Khoa",
  //     status: "Dang giao",
  //     total_money: 123,
  // },
];

export const MyOrder = () => {
  const [page, setPage] = useState(3);
  const [limit, setLimit] = useState(10);
  const [totalOrders, setTotalOrders] = useState(0);

  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
    setLimit(pageSize);
    setPage(page);
  };

  // useEffect(() => {
  //     //call api
  //     // setListOrders
  //     // setTotalOrders
  // }, [page, limit]);

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
            <img src={item.url} alt="Product" />
          </div>
          <div className="product__info">
            <span className="product__status">{item.status}</span>
            <p className="product__name">{item.product_name}</p>
            <p className="product__category">{item.category_name}</p>
            <span className="product__price">
              Thành tiền: {item.total_money}
            </span>
          </div>
        </div>
      ))}

      <div>
        <Pagination
          total={totalOrders} //listOrders.length: tong so order cua user do
          current={page}
          showTotal={(total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`;
          }}
          onChange={onChange}
          pageSize={limit}
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
    </div>
  );
};
