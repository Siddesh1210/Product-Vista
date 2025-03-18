import fetchProduct from "../Hooks/fetchProduct";
import React, { useEffect, useState } from "react";
import { Table, Image } from "antd";
import 'antd/dist/reset.css';
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addCompareProducts } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAll = useSelector((state) => state.productSlice.products);
  const compareProducts = useSelector((state) => state.productSlice.compareProducts);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
        if(productAll.length > 0) {
          setProducts(productAll);
          return;
        }
        const productList = await fetchProduct();
        setProducts(productList);
        dispatch(addProducts(productList));
    } catch (error) {
        console.error(error);
    }
  }

  const handleCompare = (product) => {
    // Prevent duplicates
    const alreadyAdded = compareProducts.some((item) => item.id === product.id);
    if (!alreadyAdded && compareProducts.length < 4) {
      dispatch(addCompareProducts(product));
      navigate("/compare-products");
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text, record) => <Image key={record.id} width={50} src={text} alt={`thumbnail-${record.id}`} loading="lazy" />,
    },
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount (%)",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: "Compare",
      key: "compare",
      render: (_, record) => {
        const isAlreadyCompared = compareProducts.some((item) => item.id === record.id);
        return (
            <button
                className={`px-2 py-1 text-xs rounded-md cursor-pointer text-white transition duration-200
                ${isAlreadyCompared
                    ? 'bg-gray-600 hover:cursor-not-allowed opacity-70'
                    : 'bg-primary hover:bg-[#3b1f58]'}
                `}
                onClick={() => handleCompare(record)}
                disabled={isAlreadyCompared}
            >
                {isAlreadyCompared ? "Compared" : "Compare"}
            </button>          
        );
      },
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Page</h1>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
        bordered
        className="rounded-lg shadow-md"
        rowClassName={(record) =>
            compareProducts.some((item) => item.id === record.id)
              ? "bg-green-100"
              : ""
          }
      />
    </div>
  );
}

export default Products;
