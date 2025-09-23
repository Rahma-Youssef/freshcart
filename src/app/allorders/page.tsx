import { getUserOrders } from "@/apis/grtUserOrders";
import { CartItem, Order } from "@/Types/order.type";
import Image from "next/image";
import React from "react";

const AllOrders = async () => {
  const data: Order[] = await getUserOrders();


  const validOrders = data.filter(
    (order) => order.cartItems && order.cartItems.length > 0
  );

  return (
    <div className="md:w-[80%] mx-auto w-full my-10 px-5 md:px-0 mt-30">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

      <div className="space-y-8">
        {validOrders.map((order: Order) => (
          <div
            key={order.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Order #{order.id}
              </h2>
              <span className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Order Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {order.cartItems.map((item: CartItem, index: number) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 p-3 rounded-lg shadow-md hover:cursor-pointer transition"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-sm font-medium line-clamp-1">
                      {item.product.title}
                    </h3>
                    <p className="text-xs text-gray-500">Qty: {item.count}</p>
                    <p className="text-sm font-semibold text-green-600">
                      {item.price} EGP
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Footer */}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <p className="text-gray-600">
                <span className="font-semibold text-sm md:text-lg">Payment Method:</span>{" "}
                {order.paymentMethodType}
              </p>
              <p className="text-gray-800 font-bold text-sm md:text-lg">
                Total Price : {order.totalOrderPrice} EGP
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
