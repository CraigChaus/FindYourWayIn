import LocationImages from './LocationImages';
import demoImage from '../../public/images/background.jpg';

export const Header = ({ name, src, alt }: any) => {
    return (
        <div className="h-auto text-xl text-center">
            <h1 className="text-4xl font-black">{name}</h1>
            <LocationImages src={src} alt={alt} />
        </div>
    );
};
export default Header;
