/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import { Layout } from "../components/Layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import { GraphQLErrorList } from "../components/GraphQLErrorList";
import { toPlainText, mapEdgesToNodes } from "../lib/helpers";
import { BlockContent } from "../components/BlockContent";
import { ProductList } from "../components/Shop/ProductList";
import { Carousel } from "../components/Homepage/Carousel";
import { CategoryNav } from "../components/Shop/CategoryNav";

const ShopPage = ({ data, errors, ...props }) => {
  const {
    page: { title, _rawBody: body },
    products,
  } = data;
  const productNodes = mapEdgesToNodes(products);
  return (
    <Layout {...props}>
      {errors && <GraphQLErrorList errors={errors} />}
      <Carousel />
      <CategoryNav />
      <Box p={4}>
        {title && <Themed.h1 sx={{ p: 0, mr: 3 }}>{title}</Themed.h1>}
        {body && <BlockContent blocks={body} />}

        {productNodes && productNodes.length > 0 && (
          <ProductList nodes={productNodes} sx={{ mt: 3 }} />
        )}
      </Box>
    </Layout>
  );
};

export function Head({data, location}) {
  const {page: {title, _rawBody: body}} = data
  return <Seo title={title} description={body && toPlainText(body)} location={location} />
}

export const query = graphql`
  query ShopQuery {
    page: sanityPage(id: { eq: "-dac4f700-3a5a-551c-9cd2-d366d84fa14b" }) {
      title
      _rawBody
    }
    products: allSanityProduct(
      sort: [{ sku: DESC }, { title: ASC }, { publishedAt: DESC }]
      filter: { displayInShop: { ne: false } }
    ) {
      edges {
        node {
          ...productPreviewFields
        }
      }
    }
  }
`;

export default ShopPage;
