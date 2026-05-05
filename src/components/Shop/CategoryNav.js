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
        bg: "white",
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "rgba(58,52,25,0.12)",
        boxShadow: "0 2px 12px rgba(58,52,25,0.07)",
      }}
    >
      {/*
        Two-layer scroll pattern:
        - outer (scrollRef): block-level, constrained to parent width, overflow-x: auto
        - inner: inline-flex, grows to intrinsic width, min-width 100% to fill container
        This ensures scroll activates correctly on all browsers.
      */}
      <Box
        ref={scrollRef}
        sx={{
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: [2, 2, 2, 2],
            px: [3, 3, 4],
            py: ["8px", "8px", "10px", "12px"],
            minWidth: "100%",
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
      </Box>

      {showFade && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40px",
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
      minHeight: ["44px", "44px", "44px", "unset"],
      px: ["12px", "12px", "14px"],
      py: ["0", "0", "0", "7px"],
      borderRadius: "20px",
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["13px", "13px", "14px", 1],
      letterSpacing: "0.5px",
      textDecoration: "none",
      transition:
        "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
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
