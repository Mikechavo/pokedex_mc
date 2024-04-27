import { Mail, Github, Linkedin } from "lucide-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../components/Button";

const Sidebar = () => {
  type SmallSidebarItemProps = {
    Icon: ElementType;
    title: string; // Add title prop to specify hover text
    url?: string;
  };

  const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
    return (
      <a
        href={url ?? `mailto:mchavez76@yahoo.com`}
        title={title} // Add title attribute for hover text
        className={twMerge(
          buttonStyles({ variant: "ghost" }),
          "py-4 px-1 grid justify-items-start rounded-lg gap-1 "
        )}
      >
        <Icon className="w-6 h-6" />
      </a>
    );
  };

  return (
    <aside
      className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1" /*ml-1*/
      style={{ width: "100px", maxHeight: "calc(100vh - 64px)" }}
    >
      <SmallSidebarItem Icon={Mail} title="Send Email" />
      <SmallSidebarItem
        Icon={Github}
        title="My GitHub"
        url="https://github.com/Mikechavo"
      />
      <SmallSidebarItem
        Icon={Linkedin}
        title="My LinkedIn"
        url="https://www.linkedin.com/in/michael-t-chavez/"
      />
    </aside>
  );
};

export default Sidebar;