import Burger from "../navigation/burger";
import NavBar from "../navigation/NavBar";

export default function Header(){
    return(
        <header>
            <nav>
                <Burger />
                <NavBar />
            </nav>
        </header>
    )
}