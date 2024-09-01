import  { useEffect, useState } from "react";
import axios from "axios";
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
        console.log(error)
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
          setProperties(response.data.data);
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
    <div className="p-4">
      <div className="font-semibold text-xl md:text-2xl lg:text-3xl">
        <h1>Service Apartments</h1>
      </div>

      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white mb-6 rounded-md flex flex-col md:flex-row gap-2 p-4 shadow-lg"
        >
          <div className="mb-4 md:mb-0">
            <img
              className="w-[250px] md:w-[150px] lg:w-[250px] h-[200px] md:h-[150px] lg:h-[200px] object-cover rounded-md items-center"
              src={property.website_image}
              alt="website_image"
            />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h1 className="text-base md:text-lg lg:text-2xl font-bold">
                  {property.property_name}
                </h1>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                  Property code: {property.property_code}
                </p>
              </div>
              <div>
                <h1 className="text-purple-800 font-bold text-xs md:text-lg lg:text-xl">
                  USD {property.price}
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base mb-2">
              <p>
                Check in: <b>{property.check_in}</b>
              </p>
              <p>
                Check Out: <b>{property.check_out}</b>
              </p>
              <button
                onClick={handleSelect}
                className="bg-orange-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm"
              >
                Select
              </button>
            </div>
            <hr  className="border-gray border"/>
            <div className="flex flex-wrap justify-between mt-2 text-[8px] md:text-sm lg:text-base mr-10" >
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <img src={img} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>Bedrooms</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <img src={img1} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>Nights</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <img src={img2} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>children</h1>
                  <p>{property.parking}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <img src={img3} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>parkin</h1>
                  <p>{property.adults} </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <img src={img4} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>pet</h1>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={img5} className="w-3 h-3 md:w-6 md:h-6" alt="" />
                <div>
                  <h1>Adults</h1>
                  <p>{property.adults}</p>
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
