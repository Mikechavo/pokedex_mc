import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../components/Button";
import { Home } from 'lucide-react'; // Import the Home icon from lucide-react
import { Link } from 'react-router-dom';

const Sidebar = () => {
  type SmallSidebarItemProps = {
    icon: JSX.Element; // Change imageSrc type to JSX.Element
    title: string;
    websiteUrl: string;
  };

  const SmallSidebarItem = ({ icon, title, websiteUrl }: SmallSidebarItemProps) => {
    return (
      <div className="grid gap-4">
        <Link
          to={websiteUrl}
          title={title}
          className={twMerge(
            buttonStyles({ variant: "ghost" }),
            "py-4 px-1 grid justify-items-start rounded-full overflow-hidden gap-1"
          )}
        >
          {icon} {/* Use the icon directly */}
          {/* <span className="text-sm text-gray-700 text-center font-bold">Energy</span>
          <span className="text-sm text-gray-700 text-center font-bold">Page</span> */}
        </Link>
      </div>
    );
  };

  return (
    <aside
      className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1"
      style={{ width: "100px", maxHeight: "calc(100vh - 64px)" }}
    >
      <SmallSidebarItem
        icon={<Home />} // Use the Home icon component
        title="Home"
        websiteUrl="/" // Update websiteUrl to "/"
      />
    </aside>
  );
};

export default Sidebar;

