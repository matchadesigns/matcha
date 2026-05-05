/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import { Fragment } from "react";
import { Link } from "gatsby";

export const Title = ({ title, category }) => {
  return (
    <Fragment>
      <Box sx={{ lineHeight: 2 }}>
        Catégorie :{" "}
        <Link sx={{ p: 2, bg: "light", borderRadius: 8 }} to={category.link}>
          <h2
            sx={{ display: "inline-block", fontSize: 2, lineHeight: 1, m: 0 }}
          >
            {category.title}
          </h2>
        </Link>
      </Box>
      <Themed.h1 sx={{ my: 10, fontSize: [3, 4, 4, 5] }}>{title}</Themed.h1>
    </Fragment>
  );
};
