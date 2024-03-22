/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { LayoutGroup } from "framer-motion";

export const wrapPageElement = ({ element, props }) => {
  return <LayoutGroup {...props}>{element}</LayoutGroup>;
};

/*
export const shouldUpdateScroll = ({routerProps: {location}, getSavedScrollPosition}) => {

  const transitionDelay = 500(location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay)
  }

  const scrollToTopRoutes = ['/privacy-policy', '/page-2']
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(location.pathname) !== -1) {
    // window.scrollTo(0, 0)
    return true
  } else {
    return false
  }
}

*/
