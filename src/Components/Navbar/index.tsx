import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

interface Props {
    themeTogller: () => void;
}

const NavBar = ({ themeTogller }: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <Container>
            <header className="headerContainer" >
                <div className="headerContent">
                    <h1>Portfólio</h1>
                    <nav>
                        <a className='active'>Home</a>
                        <a>Sobre mim</a>
                        <a>Projetos</a>
                        <a>Serviços</a>
                        <a>Minhas skills</a>
                    </nav>
                    <Switch
                        onChange={themeTogller}
                        checked={theme.title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={35}
                        handleDiameter={20}
                        onColor={theme.colors.primary}
                        className='switch'
                    />
                </div>

            </header>
        </Container>
    );
}

export default NavBar;