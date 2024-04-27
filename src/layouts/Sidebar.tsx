import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../components/Button";
import masterball from "../assets/masterball.png";

const Sidebar = () => {
  type SmallSidebarItemProps = {
    imageSrc: string;
    title: string;
    websiteUrl: string;
  };

  const SmallSidebarItem = ({ imageSrc, title, websiteUrl }: SmallSidebarItemProps) => {
    return (
      <div className="grid gap-4">
        <a
          href={websiteUrl}
          title="Official Pokémon Website"
          className={twMerge(
            buttonStyles({ variant: "ghost" }),
            "py-4 px-1 grid justify-items-start rounded-full overflow-hidden gap-1"
          )}
        >
          <img src={imageSrc} alt={title} className="w-6 h-6 object-cover" />
          <span className="text-sm">Official Website</span>
        </a>
      </div>
    );
  };

  return (
    <aside
      className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1"
      style={{ width: "100px", maxHeight: "calc(100vh - 64px)" }}
    >
      <SmallSidebarItem
        imageSrc={masterball}
        title="Official Pokémon Website"
        websiteUrl="https://www.pokemon.com/us"
      />
    </aside>
  );
};

export default Sidebar;
