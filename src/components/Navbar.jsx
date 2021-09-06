import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCategory } from "../services/CategoryAPI";

const Navbar = () => {
    const { data } = useQuery("category", fetchCategory);
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            {data &&
                Object.getOwnPropertyNames(data).map((name, i) => (
                    <NavLink to={name} key={i}>
                        {name.toLocaleUpperCase()}
                    </NavLink>
            ))}
        </div>
    )
};

export default Navbar;