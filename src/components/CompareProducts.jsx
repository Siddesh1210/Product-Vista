import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Card, Image } from "antd";
import { addCompareProducts, addProducts, removeCompareProduct } from "../redux/slices/productSlice";
import fetchProduct from "../Hooks/fetchProduct";

function CompareProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const compareProducts = useSelector((state) => state.productSlice.compareProducts);
  const allProducts = useSelector((state) => state.productSlice.products);

  useEffect(() => {
    const fetchData = async () => {
      const productList =  await fetchProduct();
      dispatch(addProducts(productList));
    };
  
    if (allProducts.length === 0) {
      fetchData();
    }
  }, [allProducts]);

  const handleAdd = (product) => {
    if (compareProducts.length < 4) {
      dispatch(addCompareProducts(product));
    }
  };

  const handleRemove = (product) => {
    dispatch(removeCompareProduct(product));
    console.log("compareProducts : ", compareProducts);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Compare Products</h1>
        <button
                className={`px-2 py-1 text-sm rounded-md cursor-pointer text-white transition duration-200
                ${compareProducts && compareProducts?.length==4
                    ? 'bg-gray-600 cursor-not-allowed opacity-70'
                    : 'bg-primary hover:bg-[#3b1f58]'}
                `}
                onClick={() => setIsModalOpen(true)}
                disabled={compareProducts && compareProducts?.length==4}
            >
                {compareProducts && compareProducts?.length==4 ? "Add More + " : "Add More + "}
        </button>
      </div>

      {/* Compared Products Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {compareProducts.length > 0 ? (
            compareProducts.map((product) => (
                <div key={product.id} className="relative">
                    <Card
                        className="rounded-xl shadow-md tracking-wide text-md"
                        cover={
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            height={200}
                            style={{ objectFit: "contain" }}
                            preview={false}
                            loading="lazy"
                        />
                        }
                    >
                        <p><strong>Title:</strong> {product.title}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                        <p><strong>Rating:</strong> {product.rating} <i className="bi bi-star-fill text-yellow-400"></i></p>
                    </Card>

                    {/* Remove Icon at Top-Right */}
                    <button
                        className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition text-xl z-10"
                        onClick={() => handleRemove(product)}
                        title="Remove"
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
              ))
        ): null}
      </div>

      {
        compareProducts.length == 0 && <p className="text-center text-gray-600 tracking-wide">No Product found for comparison!!!</p>
      }

        <Modal
            title="Add Product to Compare"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null}
            width={800}
            style={{ padding: '0.5rem' }} // remove extra space
        >
            <div className="max-h-[60vh] overflow-y-auto p-2">
                {allProducts?.map((product) => {
                const isAlreadyAdded = compareProducts.some((item) => item.id === product.id);
                return (
                    <div
                    key={product.id}
                    className={`flex items-center justify-between p-2 border ${isAlreadyAdded ? "border-green-500 bg-green-50" : "border-gray-200"} rounded-md mb-2`}
                    >
                    <div className="flex items-center gap-3">
                        <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-14 h-14 object-cover rounded-md"
                        />
                        <div>
                        <p className="text-sm font-medium">{product.title}</p>
                        <p className="text-xs text-gray-500">{product.brand}</p>
                        </div>
                    </div>

                    <div>
                        {isAlreadyAdded ? (
                            <button
                                onClick={() => handleRemove(product)}
                                className="text-red-600 hover:text-red-800 text-lg"
                                title="Remove from Compare"
                            >
                                <i className="bi bi-x-circle-fill"></i>
                            </button>
                            ) : (
                            <button
                                onClick={() => handleAdd(product)}
                                className={`text-green-600 hover:text-green-800 text-lg ${compareProducts.length >= 4 ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={compareProducts.length >= 4}
                                title="Add to Compare"
                            >
                                <i className="bi bi-plus-circle-fill"></i>
                            </button>
                        )}
                    </div>
                    </div>
                );
                })}
            </div>
        </Modal>

    </div>
  );
}

export default CompareProducts;
