import { HoverMenuProps } from "../Models";

const HoverMenu: React.FC<HoverMenuProps> = ({ children }) => {
  return (
    <div className="absolute border border-transparent bg-transparent">
      <div className="w-0 ml-4 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-primary shadow-md" />
      <div className="bg-white w-full h-full rounded-md shadow-md p-4">
        {children}
      </div>
    </div>
  );
};

export default HoverMenu;
