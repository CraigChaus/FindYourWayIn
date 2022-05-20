
import MenuBar from "../MenuBar";
import SearchInputForm from "../SearchInputForm";


export const Header = () => {
    return (


        <div  className="flex justify-start h-16 bg-zinc-100 rounded-b-2xl z-20">
                <MenuBar/>
                <SearchInputForm/>

        </div>
     )
}

export default Header;