/** @jsx jsx */
import { jsx, Box, Flex, Grid } from "theme-ui";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Internal paths use Gatsby's Link, anything else a plain anchor
const SlideLink = ({ to, children }) => {
  if (!to) return children;
  const linkSx = { color: "inherit", textDecoration: "none" };
  return to.startsWith("/") ? (
    <Link to={to} sx={linkSx}>
      {children}
    </Link>
  ) : (
    <a href={to} sx={linkSx}>
      {children}
    </a>
  );
};

export const Carousel = () => {
  const { homepage } = useStaticQuery(graphql`
    query HomepageCarouselQuery {
      homepage: sanityHomepage(_id: { eq: "homepage" }) {
        slides {
          _key
          title
          subtitle
          link
          image {
            alt
            hotspot {
              x
              y
            }
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  const slides = homepage?.slides?.filter((slide) => slide?.image?.asset) ?? [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.goTo(index),
    [emblaApi],
  );

  if (slides.length === 0) return null;

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box ref={emblaRef}>
        <Flex sx={{ display: "flex" }}>
          {slides.map((slide) => (
            <Box
              key={slide._key}
              sx={{
                flex: "0 0 100%",
                minWidth: 0,
                minHeight: ["auto", "auto", "400px", "500px"],
              }}
            >
              <Grid columns={[1, 1, 2]} gap={0} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    bg: "green",
                    color: "brownWhite",
                    p: [4, 5, 5],
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box sx={{ maxWidth: "500px", mx: "auto", width: "100%" }}>
                    <h1
                      sx={{
                        fontFamily: "heading",
                        fontWeight: "heading",
                        color: "brownWhite",
                        fontSize: [4, 5, 5, 5],
                        lineHeight: "1.1",
                        mb: 4,
                      }}
                    >
                      <SlideLink to={slide.link}>{slide.title}</SlideLink>
                    </h1>
                    <p
                      sx={{
                        fontFamily: "body",
                        fontSize: [2, 3, 3],
                        lineHeight: "1.4",
                        opacity: 0.9,
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </Box>
                  <Flex
                    sx={{
                      position: "absolute",
                      bottom: [3, 4],
                      left: [4, 5, 6],
                      gap: 3,
                      zIndex: 1,
                    }}
                  >
                    {slides.map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          bg: "brownWhite",
                          opacity: i === selectedIndex ? 1 : 0.3,
                          cursor: "pointer",
                          transition: "all 0.2s ease-in-out",
                          border: "2px solid",
                          borderColor: "brownWhite",
                          ":hover": {
                            opacity: 0.8,
                          },
                        }}
                        onClick={() => scrollTo(i)}
                      />
                    ))}
                  </Flex>
                </Box>
                <Box sx={{ height: ["300px", "400px", "100%"] }}>
                  <GatsbyImage
                    image={getImage(slide.image.asset)}
                    alt={slide.image.alt || slide.title}
                    style={{ height: "100%" }}
                    objectPosition={
                      slide.image.hotspot
                        ? `${slide.image.hotspot.x * 100}% ${slide.image.hotspot.y * 100}%`
                        : "50% 50%"
                    }
                  />
                </Box>
              </Grid>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
