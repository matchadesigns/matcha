/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import { Fragment } from "react";

export const Title = ({ title }) => {
  return (
    <Fragment>
      <Themed.h1 sx={{ my: 10, fontSize: [3, 4, 4, 5] }}>{title}</Themed.h1>
    </Fragment>
  );
};
