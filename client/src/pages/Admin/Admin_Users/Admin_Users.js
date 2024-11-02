import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditUserModal from "../../../components/Admin/Modal/EditUserModal";
import EditOrderModal from "../../../components/Admin/Modal/EditOrderModal";
export default function Users() {
  const [isDelete, setIsDetele] = useState(false);
  // const [users, setUsers] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSelected = (value) => {
    setIsDetele(value);
  };

  const users = [
    {
      id: 1,
      username: "nguyenvanA",
      email: "nguyenvana@gmail.com",
      password: "password123",
      phone: "0123456789",
      dob: "1990-01-01",
    },
    {
      id: 2,
      username: "tranvanB",
      email: "tranvanb@gmail.com",
      password: "password456",
      phone: "0987654321",
      dob: "1992-05-15",
    },
    {
      id: 3,
      username: "lethithuyC",
      email: "lethithuyc@gmail.com",
      password: "password789",
      phone: "0912345678",
      dob: "1995-08-20",
    },
  ];

  //   useEffect(() => {
  //     const getUsers = async () =>{
  //       try {
  //         const response = await axios.get('api/users')
  //         console.log(response.data)
  //         setUsers(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     getUsers()
  // }, [])
  // if (!Array.isArray(users)) {
  //   console.error('Expected users to be an array, but got:', users);
  //   return <div>No users available</div>;
  // }

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
                  Tài khoản
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Mật khẩu
                </th>
                <th scope="col" className="px-6 py-3">
                  Số điện thoại
                </th>
                <th scope="col" className="px-6 py-3">
                  Ngày sinh
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={user.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.password}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">{user.dob}</td>
                    <td className="px-6 py-4 flex">
                      <div className='flex items-center gap-4'>
                        <EditUserModal user={user}/>
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
