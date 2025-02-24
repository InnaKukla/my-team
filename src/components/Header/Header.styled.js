import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 327px;
  margin: auto auto;

  @media screen and (min-width: 768px) {
    max-width: 689px;
    margin: auto auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #014e56;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1110px;
  }
`;
export const NavContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavLogo = styled.img`
  width: 128px;
  height: 32px;

  @media screen and (min-width: 768px) {
    margin-right: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 160px;
    height: 40px;
  }
`;

export const NavLinks = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
    padding: 0;

    li {
      a {
        font-family: "Livvic";
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #ffffff;

        &:hover {
          color: #f67e7e;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactsButton = styled.button`
  padding: 9px 32px;
  border: 2px solid #fff;
  background: none;
  color: #fff;
  cursor: pointer;
  border-radius: 24px;
  font-family: "Livvic";
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  text-underline-position: "from-font";
  text-decoration-skip-ink: none;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #002529;
    border: 2px solid #ffffff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
