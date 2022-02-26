const withReactSvg = require('next-react-svg');
const path = require('path');

const basePath = '';

module.exports = withReactSvg({
  productionBrowserSourceMaps: true,
  basePath,
  include: [path.resolve(__dirname, 'svg')],
  images: {
    domains: [],
  },
  async redirects() {
    return [];
  },
});
