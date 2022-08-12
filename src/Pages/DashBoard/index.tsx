import DashboardContent from "../../Components/DashboardContent";
import NavBar from "../../Components/Navbar";
import { Container } from "./styles";

interface Props {
    themeTogller: () => void;
}

const DashBoard = ({ themeTogller }: Props) => {
    return (
        <Container>
            <NavBar themeTogller={themeTogller} />
            <DashboardContent />
        </Container>
    )
}


export default DashBoard;