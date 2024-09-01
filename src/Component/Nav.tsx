import logo from "../assets/image.png";

const Nav = () => {
  return (
    <div>
      <div className=" bordetr bottom-2 border-red-800 ">
        <img src={logo} width={200} alt="logo-image" />
      </div>
      <hr className="border-black mt-4" />
    </div>
  );
};

export default Nav;
