import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import EditProductModal from "../../../components/Admin/Modal/EditProductModal";
import DeleteModal from "../../../components/Admin/Modal/DeleteModal";
import AddLaptop from "../../../components/Admin/Modal/AddLaptop";
export default function Products() {
  const laptops = [
    {
      laptop_id: 1,
      model: "Laptop X1",
      description: "High performance laptop for professionals",
      price: 1200,
      ram: "16GB",
      storage: "512GB SSD",
      processor: "Intel i7",
      gpu: "NVIDIA GTX 1650",
      battery: "10 hours",
      screenSize: "15.6 inch",
      weight: "1.5kg",
      stockQuantity: 20,
      imageUrl: "https://example.com/image-x1.jpg",
      os: "Windows 11",
    },
    {
      laptop_id: 2,
      model: "Laptop Y2",
      description: "Affordable laptop for students",
      price: 700,
      ram: "8GB",
      storage: "256GB SSD",
      processor: "Intel i5",
      gpu: "Integrated",
      battery: "8 hours",
      screenSize: "14 inch",
      weight: "1.3kg",
      stockQuantity: 50,
      imageUrl: "https://example.com/image-y2.jpg",
      os: "Windows 10",
    },
    {
      laptop_id: 3,
      model: "Laptop Z3",
      description: "Gaming laptop with high-end specs",
      price: 1500,
      ram: "32GB",
      storage: "1TB SSD",
      processor: "AMD Ryzen 9",
      gpu: "NVIDIA RTX 3060",
      battery: "12 hours",
      screenSize: "17 inch",
      weight: "2.5kg",
      stockQuantity: 10,
      imageUrl: "https://example.com/image-z3.jpg",
      os: "Windows 11",
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="p-8 sm:ml-64">
        <div className="flex mb-8">
          <p className="font-semibold text-2xl">Manage Products</p>
          <div className="ms-auto px-2">
            <AddLaptop />
          </div>
          {/* <button className=" bg-indigo-600 px-4 ms-auto text-white font-semibold rounded-lg">
            Add Laptop
          </button> */}
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Image Url
                </th>
                <th scope="col" className="px-6 py-3">
                  OS
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {laptops.map((laptop) => (
                <>
                  <tr
                    key={laptop.laptop_id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {laptop.model}
                    </th>
                    <td className="px-6 py-4">{laptop.description}</td>
                    <td className="px-6 py-4">{laptop.price}</td>
                    <td className="px-6 py-4">{laptop.stockQuantity}</td>
                    <td className="px-6 py-4">{laptop.imageUrl}</td>
                    <td className="px-6 py-4">{laptop.os}</td>
                    <td className="px-6 py-4">
                      <EditProductModal laptop={laptop} />
                      <DeleteModal />
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
