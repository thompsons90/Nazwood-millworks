const size = {
  mobile: "500px",
  tablet: "600px",
  desktop: "990px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
