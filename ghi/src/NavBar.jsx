import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const {token, baseUrl } = useAuthContext();
  console.log("AUTH TOKEN", token);
  console.log("AUTH BASE URL", baseUrl);

  return (
    <nav>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/MealForm">Meal Form</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
