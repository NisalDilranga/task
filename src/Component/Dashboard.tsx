import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Component/Nav";
import Modal from "./Modal";

import img from "../assets/icons/image.png";
import img1 from "../assets/icons/image1.png";
import img2 from "../assets/icons/image2.png";
import img3 from "../assets/icons/image3.png";
import img4 from "../assets/icons/image4.png";
import img5 from "../assets/icons/image5.png";

const Dashboard = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProperties = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Not Authorized. Please login first.");
        return;
      }

      try {
        const response = await axios.get(
          "https://skill-test.similater.website/api/v1/property/list",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          }
        );

        console.log(response.data.data);
        if (response.data.status && response.data.code === "200") {
          setProperties(response.data.data); // Assuming the property data is returned under 'data'
        } else {
          setError("Failed to fetch properties.");
        }
      } catch (err) {
        setError("You are not authorized to view this resource.");
      }
    };

    fetchProperties();
  }, []);
  const handleSelect = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmitModal = () => {
    
    setIsModalOpen(false);
    alert("Property selection submitted!");
  };
  return (
    <div className=" ">
      <div className=" font-semibold text-[28px] p-4 font-sans">
        <h1>Service apartments</h1>
      </div>

      {properties.map((property) => (
        <div key={property.id} className=" bg-w mb-6 rounded-md flex gap-2 ">
          <div className="m-4">
            <img
              className="w-[280px] h-[200px] "
              src={property.website_image}
              alt="website_image"
            />
            {/* <span className="absolute bg-black top-2">{property.website}</span> */}
          </div>
          <div className="flex flex-col">
            <div className="flex  mt-6 justify-between items-center">
              <div className="">
                <h1 className="text-2xl  font-bold">
                  {property.property_name}
                </h1>
                <p className=" text-[15px] font-medium text-gray ">
                  Property code :{property.property_code}
                </p>
              </div>
              <div>
                <h1 className="text-purple-800 font-bold">
                  USD {property.price}
                </h1>
              </div>
            </div>
            <div className="flex w-[1100px] mt-4 text-[15px] h-[60px]  justify-between items-center">
              <p>
                Check in:<b> {property.check_in}</b>
              </p>

              <p>
                Check Out: <b> {property.check_out}</b>
              </p>
              <button onClick={handleSelect} className="w-[88px] h-[37px] text-white bg-orange-600 rounded-md">
                Select
              </button>
            </div>
            <hr />
            <div className="flex justify-between w-[1000px] mt-4 text-[15px]">
              <div className="flex gap-2 items-center">
                <img src={img} className="w-[22px] h-[22px]  " alt="" />
                <div className="flex flex-col">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img1}
                  className="w-[22px] h-[22px] flex flex-col items-center "
                  alt=""
                />
                <div className="flex flex-col text-[14px]">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={img2} className="w-[22px] h-[22px]  " alt="" />
                <div className="flex flex-col text-[14px]">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={img3} className="w-[22px] h-[22px] " alt="" />
                <div className="flex flex-col text-[14px]">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={img4} className="w-[22px] h-[22px] " alt="" />
                <div className="flex flex-col text-[14px]">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={img5} className="w-[22px] h-[22px] " alt="" />
                <div className="flex flex-col text-[14px]">
                  <h1>bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
       <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
    </div>
  );
};

export default Dashboard;
// {properties.map((property) => (
//     <h1 key={property.id}> {property.id}</h1>
//   ))}

{
  /* <div className="flex gap-3 w-[1100px] mt-4 h-[180px] justify-between items-center border border-red-600 ">
              <div className=" flex flex-col gap-12">
                <div className="">
                  <h1 className="text-2xl  font-bold">
                    {property.property_name}
                  </h1>
                  <p className=" text-[15px] mt-2">Property code :{property.property_code}</p>
                </div>
                 <p>Check Out:{property.check_out}</p>
              </div>
              <div className="">
                <p>Check Out:{property.check_out}</p>
              </div>
              <div className="">
                <h1>USD {property.price}</h1>
                <button>Select</button>
              </div>
            </div>
            <div className=""></div> */
}
