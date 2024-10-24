import { useState } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import DeleteModal from "../../../components/Admin/Modal/DeleteModal";
import EditOrderModal from "../../../components/Admin/Modal/EditOrderModal";
export default function Orders() {
  const [isDelete, setIsDetele] = useState(false);
  const handleSelected = (value) => {
    setIsDetele(value);
  };
  const orders = [
    {
      order_id: 'DH001',
      orderDate: '2024-10-10',
      status: 'Đang xử lý',
      deliveryDate: '2024-10-15',
      totalAmount: '5,000,000 VND',
    },
    {
      order_id: 'DH002',
      orderDate: '2024-10-12',
      status: 'Đã giao hàng',
      deliveryDate: '2024-10-18',
      totalAmount: '3,200,000 VND',
    },
    {
      order_id: 'DH003',
      orderDate: '2024-10-13',
      status: 'Hủy đơn',
      deliveryDate: 'Không có',
      totalAmount: '0 VND',
    },
    {
      order_id: 'DH004',
      orderDate: '2024-10-14',
      status: 'Đang giao hàng',
      deliveryDate: '2024-10-20',
      totalAmount: '7,500,000 VND',
    },
  ];
  

  return (
    <>
      <Sidebar />
      <div className="p-8 sm:ml-64">
        <div className="flex mb-8">
          <p className="font-semibold text-2xl">Manage Users</p>
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
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={order.order_id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.order_id}
                    </th>
                    <td className="px-6 py-4">{order.status}</td>
                    <td className="px-6 py-4">{order.orderDate}</td>
                    <td className="px-6 py-4">{order.deliveryDate}</td>
                    <td className="px-6 py-4">{order.totalAmount}</td>
                    <td className="px-6 py-4 flex">
                         <EditOrderModal order={order}/>
                      <DeleteModal handleSelected={handleSelected} />
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
