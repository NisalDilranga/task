import logo from "../assets/image.png";

const Nav = () => {
  return (
    <div>
      <div className=" bordetr bottom-2 border-red-800 ">
        <img src={logo}  alt="logo-image " className="lg:w-[250px]  w-[150px]" />
      </div>
      <hr className="border-gray mt-4" />
    </div>
  );
};

export default Nav;
