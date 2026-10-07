/** @jsx jsx */
import { graphql } from 'gatsby';
import { Box, Card, jsx } from 'theme-ui';
import { AddToCart } from '../AddToCart';
import { isPromo } from '../helpers';
import { PromoBadge } from '../PromoBadge';
import { Image } from './Image';
import { Price } from './Price';
import { Stock } from './Stock';
import { Title } from './Title';

export const ProductCard = ({ id, title, slug, category, images, price, sku }) => {
  graphql`
    fragment productPreviewFields on SanityProduct {
      id
      title
      slug {
        current
      }
      category {
        title
        slug {
          current
        }
      }
      images {
        asset {
          ...productImageFields
        }
      }
      price {
        value
        formatted
      }
      sku
    }
  `;
  const productPath = `/${category.slug.current}/${slug.current}/`;
  const inStock = sku > 0;
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
    >
      <div>
        <div sx={{ position: 'relative', boxShadow: '0px 10px 10px rgba(0, 0, 0, .035)' }}>
          {isPromo(category) && (
            <PromoBadge sx={{ position: 'absolute', top: 2, left: 2, zIndex: 1, pointerEvents: 'none' }} />
          )}
          {images && images[0] && images[0].asset && <Image image={images[0].asset} link={productPath} />}
        </div>
        <Box p={1}>
          <Title title={title} category={category.title} link={productPath} />
          {inStock && price && <Price price={price.formatted} />}
          <Stock inStock={inStock} />
          {inStock && (
            <AddToCart
              id={id}
              title={title}
              price={price.value}
              url={productPath}
              description={category.title}
              image={images && images[0].asset.url}
              discrete="true"
            />
          )}
        </Box>
      </div>
    </Card>
  );
};
