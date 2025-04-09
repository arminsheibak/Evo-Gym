import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props {
  children: React.ReactNode;
  setSelectedPage: (value: string) => void;
}


const Btn = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-6 py-2 hover:bg-primary-500 hover:text-white transition duration-300"
    onClick={() => setSelectedPage("Contact Us")}
    href="#contactus"
    >
      {children}
    </AnchorLink>
  )
}

export default Btn