import LocationImages from "./LocationImages";
import demoImage from "../../public/images/IMG_2431.jpg";


export const Header = (props: any) => {
  return (
    <div className="h-auto text-xl text-center">
      <h1 className="text-4xl font-bold">{props.name}</h1>
      <LocationImages src={demoImage} alt="Demo" />
    </div>
  )
}
 export default Header;