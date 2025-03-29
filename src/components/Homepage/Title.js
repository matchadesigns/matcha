/** @jsx jsx */

import { jsx } from "theme-ui";
import { Fragment } from "react";
import Logo from "../../assets/svg/logo2025.svg";
// import MatchaCurved from '../../assets/svg/matcha_curved.svg'

export const Title = () => (
  <Fragment>
    <Logo sx={{ width: "35vmin", mt: [4, 6], mb: 3, zIndex: 1 }} />
    <h1 hidden>Mâtcha Designs</h1>
  </Fragment>
);
