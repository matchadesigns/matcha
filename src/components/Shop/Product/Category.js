/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";

export const Category = ({ category }) => {
  return (
    <Box sx={{ lineHeight: 2 }}>
      <a href="/">Boutique</a> /{" "}
      <Link sx={{ p: 2, bg: "light", borderRadius: 8 }} to={category.link}>
        <h2 sx={{ display: "inline-block", fontSize: 2, lineHeight: 1, m: 0 }}>
          {category.title}
        </h2>
      </Link>
    </Box>
  );
};
