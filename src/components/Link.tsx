import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  href: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Link = ({ href, selectedPage, setSelectedPage }: Props) => {
  const hrefToLowerCase = href.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      href={`#${hrefToLowerCase}`}
      className={`${
        selectedPage === hrefToLowerCase ? "text-primary-500 font-semibold" : ""
      } transition duration-500 hover:text-primary-500`}
      onClick={() => setSelectedPage(hrefToLowerCase)}
    >
      {href}
    </AnchorLink>
  );
};

export default Link;
