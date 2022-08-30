import { IconButton, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";

interface Props {
    themeTogller: () => void;
    isMobile: boolean;
    isTablet: boolean;
}

const NavBar = ({ themeTogller, isMobile, isTablet }: Props) => {
    const theme = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    return (
        <Container>
            <header className="headerContainer" >
                <div className="headerContent">
                    <h1>Portfólio</h1>
                    {
                        isMobile ?
                            <nav>
                                <IconButton
                                    sx={{ ml: 'auto', mt: '1rem' }}
                                    onClick={e => setAnchorEl(e.currentTarget)}
                                >
                                    <FaBars size={25} />
                                </IconButton>
                            </nav>
                            :
                            isTablet ?
                                <nav>
                                    <IconButton
                                        sx={{ ml: 'auto', mt: '1rem' }}
                                        id="menuButton"
                                        onClick={e => setAnchorEl(e.currentTarget)}
                                    >
                                        <FaBars size={25} />
                                    </IconButton>
                                </nav>
                                :
                                < nav >
                                    <a className='active'>Home</a>
                                    <a>Sobre mim</a>
                                    <a>Projetos</a>
                                    <a>Serviços</a>
                                    <a>Minhas skills</a>
                                </nav>
                    }
                    <Menu
                        open={openMenu}
                        onClose={() => setAnchorEl(null)}
                        anchorEl={anchorEl}
                    >
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Sobre Mim</MenuItem>
                        <MenuItem>Projetos</MenuItem>
                        <MenuItem>Serviços</MenuItem>
                        <MenuItem>Minhas skills</MenuItem>
                    </Menu>
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
        </Container >
    );
}

export default NavBar;