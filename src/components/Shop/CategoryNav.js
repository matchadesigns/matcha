/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby";
import { useEffect, useRef, useState } from "react";
import { Box, jsx } from "theme-ui";

export const CategoryNav = ({ activeSlug }) => {
  const data = useStaticQuery(graphql`
    query CategoryNavQuery {
      categories: allSanityProductCategory(sort: { order: ASC }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const categories = data.categories.edges.map((e) => e.node);
  const [topOffset, setTopOffset] = useState(0);
  const scrollRef = useRef(null);
  const [showFade, setShowFade] = useState(true);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth >= 1024) {
        const header = document.querySelector("header");
        setTopOffset(header ? header.offsetHeight : 0);
      } else {
        setTopOffset(0);
      }
    };

    updateOffset();

    const header = document.querySelector("header");
    const ro = header ? new ResizeObserver(updateOffset) : null;
    if (ro) ro.observe(header);
    window.addEventListener("resize", updateOffset);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () =>
      setShowFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    check();
    el.addEventListener("scroll", check, { passive: true });
    return () => el.removeEventListener("scroll", check);
  }, []);

  const isHome = !activeSlug;

  return (
    <Box
      sx={{
        position: "sticky",
        top: `${topOffset}px`,
        zIndex: 3,
        bg: "white",
        borderBottom: "1px solid",
        borderColor: "rgba(58,52,25,0.12)",
        boxShadow: "0 2px 12px rgba(58,52,25,0.07)",
      }}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          // Mobile/tablet: wrap so every category is visible, no overflow
          // Desktop: single row, scrollable if many categories
          flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
          gap: 2,
          overflowX: ["visible", "visible", "visible", "auto"],
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          px: [3, 3, 4],
          py: ["10px", "10px", "10px", "12px"],
        }}
      >
        <CategoryPill to="/" label="Tout voir" active={isHome} />

        {categories.map((cat) => (
          <CategoryPill
            key={cat.id}
            to={`/${cat.slug.current}/`}
            label={cat.title}
            active={activeSlug === cat.slug.current}
          />
        ))}
      </Box>

      {/* Fade gradient only on desktop where pills may scroll off-screen */}
      {showFade && (
        <Box
          sx={{
            display: ["none", "none", "none", "block"],
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "48px",
            background: "linear-gradient(to left, white 30%, transparent)",
            pointerEvents: "none",
          }}
        />
      )}
    </Box>
  );
};

const CategoryPill = ({ to, label, active }) => (
  <Link
    to={to}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      flexShrink: 0,
      // On mobile pills wrap to 2 rows — comfortable tap size without min-height bloat
      px: ["10px", "10px", "12px", "14px"],
      py: ["8px", "8px", "8px", "7px"],
      borderRadius: "20px",
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["12px", "12px", "13px", 1],
      letterSpacing: "0.5px",
      textDecoration: "none",
      transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
      bg: active ? "#C2945F" : "transparent",
      color: active ? "#fff !important" : "#3A3419",
      border: "1.5px solid",
      borderColor: active ? "#C2945F" : "rgba(58,52,25,0.25)",
      ":hover": {
        bg: "#C2945F",
        color: "#fff !important",
        borderColor: "#C2945F",
      },
    }}
  >
    {label}
  </Link>
);
