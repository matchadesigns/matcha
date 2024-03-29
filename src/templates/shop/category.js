/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import { Layout } from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import { GraphQLErrorList } from "../../components/GraphQLErrorList";
import { toPlainText, mapEdgesToNodes } from "../../lib/helpers";
import { BlockContent } from "../../components/BlockContent";
import { ProductList } from "../../components/Shop/ProductList";

const CategoryPage = ({ data, errors, ...props }) => {
  const { products, category } = data;
  const productNodes = mapEdgesToNodes(products);
  return (
    <Layout {...props}>
      {errors && <Seo title="GraphQL Error" />}
      {category && (
        <Seo
          title={category.title}
          description={
            category.description && toPlainText(category.description)
          }
          // image={product.image}
        />
      )}
      {errors && <GraphQLErrorList errors={errors} />}
      <Box p={4}>
        {category && <Themed.h1>{category.title}</Themed.h1>}
        {category && category.description && (
          <BlockContent blocks={category.description} />
        )}

        {productNodes && productNodes.length > 0 && (
          <ProductList nodes={productNodes} sx={{ mt: 3 }} />
        )}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  fragment productCategoryFields on SanityProductCategory {
    id
    title
    slug {
      current
    }
  }

  query Category($category: String) {
    category: sanityProductCategory(id: { eq: $category }) {
      ...productCategoryFields
    }
    products: allSanityProduct(
      filter: {
        category: { id: { eq: $category } }
        displayInShop: { ne: false }
      }
      sort: [{ publishedAt: DESC }, { title: ASC }]
    ) {
      edges {
        node {
          ...productPreviewFields
        }
      }
    }
  }
`;

export default CategoryPage;
