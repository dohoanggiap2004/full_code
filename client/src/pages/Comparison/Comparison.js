import Layout from "../../layout/Layout";
import Option from "../../components/Option/Option";
import { useState } from "react";
const Comparison = () => {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
  const [selectedProduct, setSelectdProduct] = useState([{}, {}, {}]);
  const handeSelected = (value, index) => {
    let newArr = [...selectedProduct];
    newArr[index] = value;
    console.log(newArr);
    setSelectdProduct(newArr);
  };
  const handleCompare = () => {
    console.log(selectedProduct);
  };
  return (
    <>
      <Layout>
        <section className="text-gray-700 body-font overflow-hidden border-gray-80 mt-24">
          <div class="relative inline-block">
            <span class="text-2xl md:text-3xl font-bold text-red-600">
              So sánh sản phẩm
            </span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
          <div className="container px-5 py-12 mx-auto flex flex-wrap bg-white mb-8 rounded-lg shadow-md">
            <div className="lg:w-1/4 mt-36 hidden lg:block">
              <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
                  CPU
                </p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                  RAM
                </p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                  Ổ cứng
                </p>
                <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                  Card đồ họa
                </p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                  Màn hình
                </p>
                <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                  Dung lượng pin
                </p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                  Cân nặng
                </p>
                <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                  Hệ điều hành
                </p>
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  other
                </p>
              </div>
            </div>
            <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
              <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div className="px-2 text-center h-36 flex flex-col items-center justify-center bg-gray-200">
                  {/* {<Option products={products} />} */}
                  {selectedProduct[0].name ? (
                    <h1>{selectedProduct[0].name}</h1>
                  ) : (
                    <Option handleSelected={handeSelected} index={0} />
                  )}
                </div>
                {/* CPU */}
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  {selectedProduct[0].name}
                </p>
                {/* ram */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                  RAM
                </p>
                {/* ổ cứng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  ổ cứCng
                </p>
                {/* card đồ họa */}
                <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                  gpu
                </p>
                {/* màn hình */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  screen
                </p>
                {/* pin */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                {/* cân nặng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"></p>
                {/* hệ điều hành */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  other
                </p>
              </div>
              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border border-gray-300 rounded-lgrelative">
                <div className="px-2 text-center h-36 flex flex-col items-center justify-center bg-gray-200">
                  {/* {<Option products={products} />} */}
                  {selectedProduct[1].name ? (
                    <h1>{selectedProduct[1].name}</h1>
                  ) : (
                    <Option handleSelected={handeSelected} index={1} />
                  )}
                </div>
                {/* CPU */}
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  CPU
                </p>
                {/* ram */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                  RAM
                </p>
                {/* ổ cứng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  ổ cứng
                </p>
                {/* card đồ họa */}
                <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                  gpu
                </p>
                {/* màn hình */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  screen
                </p>
                {/* pin */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                {/* cân nặng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"></p>
                {/* hệ điều hành */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  other
                </p>
              </div>
              <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div className="px-2 text-center h-36 flex flex-col items-center justify-center bg-gray-200">
                  {selectedProduct[2].name ? (
                    <h1>{selectedProduct[2].name}</h1>
                  ) : (
                    <Option handleSelected={handeSelected} index={2} />
                  )}
                </div>
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  CPU
                </p>
                {/* ram */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                  RAM
                </p>
                {/* ổ cứng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  ổ cứng
                </p>
                {/* card đồ họa */}
                <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                  gpu
                </p>
                {/* màn hình */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  screen
                </p>
                {/* pin */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                {/* cân nặng */}
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"></p>
                {/* hệ điều hành */}
                <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200"></p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  other
                </p>
              </div>
            </div>
            <div className="p-6 text-center border-t border-gray-300 ms-auto">
              <button
                onClick={handleCompare}
                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              >
                SO SÁNH
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Comparison;
