import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to={"/logIn"}>logIn</Link>
      <br />
      <Link to={"/SignUp"}>signUp</Link>
      <br />
      <Link to={"/user"}>user</Link>
    </>
  );
};
export default Home;
