import { Button } from "@mui/material";
import { Container, ContainerButton, Figure, TextSection } from "./styles";

const DashboardContent = () => {
    return (
        <Container>
            <TextSection>
                <h1 className="">
                    Olá eu sou o Evandro Jr :)
                </h1>
                <span>Desenvolvedor Full-Stack no Havan Labs</span>
            </TextSection>
            <ContainerButton>
                <Button  className="firstButton">Linkedin</Button>
                <Button className="secondButton">Github</Button>
            </ContainerButton>
            <Figure>
                <img alt="ilustration" src='assets/dashboardimg.svg' />
            </Figure>
        </Container>
    );
}

export default DashboardContent;