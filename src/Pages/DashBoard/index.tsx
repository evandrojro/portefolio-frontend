import NavBar from "../../Components/Navbar";

interface Props {
    themeTogller: () => void;
}

const DashBoard = ({ themeTogller }: Props) => {
    return (
        <NavBar themeTogller={themeTogller} />
    )
}


export default DashBoard;