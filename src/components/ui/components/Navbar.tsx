import FitLogo from "../../FitLogo";
import ProfilePicture from "../../ProfilePicture";
import Button from "./Button";
import HoverMenuGroup from "./HoverMenuGroup";
import HoverMenu from "./HoverMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full shadow-md h-20 px-16 grid grid-cols-3 place-content-center sticky top-0 z-20 bg-white">
      <FitLogo small={true} className="place-self-start" />
      <div className="grid grid-cols-4 w-full h-full items-center">
        <Button
          type="nav"
          text="Početna"
          className="w-fit"
          onClick={() => navigate("/pocetna")}
        />
        <HoverMenuGroup>
          <Button type="nav" text="Služba" className="w-fit" />
          <HoverMenu>
            <Button
              type="text"
              text="Potvrde"
              className="mb-2"
              onClick={() => navigate("/potvrde")}
            />
            <Button
              type="text"
              text="Ovjera semestra"
              className="mb-2"
              onClick={() => navigate("/ovjera-semestra")}
            />
            <Button
              type="text"
              text="Upis na godinu"
              onClick={() => navigate("/upis-na-godinu")}
            />
          </HoverMenu>
        </HoverMenuGroup>
        <Button
          type="nav"
          text="Ispiti"
          className="w-fit"
          onClick={() => navigate("/ispiti")}
        />
        <Button
          type="nav"
          text="Moji podaci"
          className="w-fit"
          onClick={() => navigate("/moji-podaci")}
        />
      </div>
      <ProfilePicture className="place-self-end" />
    </nav>
  );
};

export default Navbar;
