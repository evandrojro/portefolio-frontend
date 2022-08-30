import { useMediaQuery } from "@mui/material";
import DashboardContent from "../../Components/DashboardContent";
import NavBar from "../../Components/Navbar";
import { Container } from "./styles";

interface Props {
    themeTogller: () => void;
}
const DashBoard = ({ themeTogller }: Props) => {
    const isMobile = useMediaQuery('(max-width:400px)');
    const isTablet = useMediaQuery('(max-width:760px)');
    return (
        <Container>
            <NavBar isMobile={isMobile} isTablet={isTablet} themeTogller={themeTogller} />
            <DashboardContent />
        </Container>
    )
}


export default DashBoard;