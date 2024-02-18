const withTM = require('next-transpile-modules')([
  '@ant-design/icons',
  'rc-pagination',
  'rc-util',
  'rc-picker', // Add this line
]);

module.exports = withTM({
  // Your existing Next.js configuration
});
