/** @jsx jsx */
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Flex, jsx } from "theme-ui";
import { links } from "./";

const MenuLink = styled(Link)`
  padding-right: 0.5em;
  &.active {
    li:before {
      background-image: url(/svg/li_bullet_hover.svg);
    }
  }
`;
const Li = styled.li`
  flex-direction: row;
  display: flex;
  align-items: center;
  :padding-right: 1vw;
  &:before {
    content: '';
    height: 1em;
    width: 1em;
    background-image: url(/svg/li_bullet.svg);
    background-size: 0.75em 0.75em;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.5em;
  }
  &:hover:before {
    background-image: url(/svg/li_bullet_hover.svg);
  }
`;

export const Desktop = (props) => (
  <Flex as="ul" {...props}>
    {links.map(({ url, text }) => (
      <MenuLink key={url} to={url} activeClassName="active">
        <Li
          sx={{
            fontSize: [0, 0, 0, "0.8em", 1],
          }}
        >
          {text}
        </Li>
      </MenuLink>
    ))}
  </Flex>
);
