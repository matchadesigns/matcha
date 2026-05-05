/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import { LocationProvider } from "./src/lib/location";

export const wrapPageElement = ({ element, props }) => (
  <LocationProvider location={props.location}>{element}</LocationProvider>
);
