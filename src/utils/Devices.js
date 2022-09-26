const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '2000px'
}

export const device = {
  mobile: `(max-device-width: ${size.mobile})`,
  tablet: `(max-device-width: ${size.tablet})`,
  laptop: `(max-device-width: ${size.laptop})`
};