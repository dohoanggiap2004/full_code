import { useState } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import DeleteModal from "../../../components/Admin/Modal/DeleteModal";
import EditUserModal from "../../../components/Admin/Modal/EditUserModal";
export default function Users() {
  const [isDelete, setIsDetele] = useState(false);
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
                      <EditUserModal user={user}/>
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
