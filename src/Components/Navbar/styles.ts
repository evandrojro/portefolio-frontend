import styled from "styled-components";

export const Container = styled.div`
  .headerContainer{
    height: 8rem;
    border-bottom: 1px solid ${props=> props.theme.colors.borderBottom};
    background-color: ${props => props.theme.colors.secondary};
}

.headerContent{
    height: 8rem;
    margin: 0;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    nav{
        margin-left: 5rem;
        height: 5rem;

        a{
            display: inline-block;
            position: relative;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;

            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: ${props => props.theme.colors.textPrimary};

            transition: color 0.2s;


            & + a{
                margin-left: 2rem;
            }
            &:hover{
                color:${props => props.theme.colors.textPrimary};
            }
            &.active{
                color: ${props => props.theme.colors.textPrimary};
                font-weight: bold;
            }

            &.active::after{
               content: '';
               height: 4px;
               border-radius: 3px 3px 0 0;
               width: 100%;
               position: absolute;
               bottom: 1px;
               left: 0;
               background: ${props => props.theme.colors.primary};
            }
        }
    }
    .switch{
        margin-left: auto;
    }
}

`