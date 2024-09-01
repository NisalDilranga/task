import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Component/Nav";

const Dashboard = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

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
  return (
    <div className=" ">
      <div className=" font-semibold text-[20px] p-4">
        <h1>Service apartments</h1>
      </div>
     
        {properties.map((property) => (
         <div key={property.id} className="w-[948px] h-[189px] bg-white mb-6 border border-red-600 ">
            <div className="w-[184px] h-[165px] m-4"><img src={property.website_image} alt="website_image" />
            {/* <span className="absolute bg-black top-2">{property.website}</span> */}
            </div>
            <div className=""></div>
         </div>
        ))}
      
    </div>
  );
};

export default Dashboard;
// {properties.map((property) => (
//     <h1 key={property.id}> {property.id}</h1>
//   ))}