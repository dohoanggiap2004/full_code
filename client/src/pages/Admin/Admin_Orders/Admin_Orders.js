import React, { useState } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditOrderModal from "../../../components/Admin/Modal/EditOrderModal";
export default function Orders() {
  // const [orders, setOrders] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  }
  const handleSelected = (value) => {
    setIsDelete(value);
  };
  const orders = [
    {
      orderId: "DH001",
      orderDate: "2024-10-10",
      status: "Đang xử lý",
      deliveryDate: "2024-10-15",
      totalAmount: "5,000,000 VND",
    },
    {
      orderId: "DH002",
      orderDate: "2024-10-12",
      status: "Đã giao hàng",
      deliveryDate: "2024-10-18",
      totalAmount: "3,200,000 VND",
    },
    {
      orderId: "DH003",
      orderDate: "2024-10-13",
      status: "Hủy đơn",
      deliveryDate: "Không có",
      totalAmount: "0 VND",
    },
    {
      orderId: "DH004",
      orderDate: "2024-10-14",
      status: "Đang giao hàng",
      deliveryDate: "2024-10-20",
      totalAmount: "7,500,000 VND",
    },
  ];

    // useEffect(() => {
  //     const getOrders = async () =>{
  //       try {
  //         const response = await axios.get('api/orders')
  //         console.log(response.data)
  //         setOrders(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     getOrders()
  // }, [])
  // if (!Array.isArray(orders)) {
  //   console.error('Expected orders to be an array, but got:', orders);
  //   return <div>No orders available</div>;
  // }

  return (
    <>
      <Sidebar />
      <div className="p-8 sm:ml-64">
        <div className="flex mb-8">
          <p className="font-semibold text-2xl">Manage Orders</p>
          {/* <button className=" bg-indigo-600 px-4 ms-auto text-white font-semibold rounded-lg">
            Add user
          </button> */}
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Mã đơn hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3">
                  Ngày đặt hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Ngày giao hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Tổng tiền
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <>
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={order.orderId}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.orderId}
                    </th>
                    <td className="px-6 py-4">{order.status}</td>
                    <td className="px-6 py-4">{order.orderDate}</td>
                    <td className="px-6 py-4">{order.deliveryDate}</td>
                    <td className="px-6 py-4">{order.totalAmount}</td>
                    <td className="px-6 py-4 flex">
                      <div className='flex items-center gap-4'>
                        <EditOrderModal order={order}/>
                        <a
                            onClick={toggleModal}
                            className="font-medium text-red-600 dark:text-blue-500 hover:bg-red-300 border border-red-600 rounded-md p-1 "
                        >
                          Delete
                        </a>
                        <ConfirmModal
                            isOpen={isModalOpen}
                            toggleModal={toggleModal}
                            handleSelected={handleSelected}
                            confirmText="Bạn có chắc chắn muốn xóa?"
                        />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
