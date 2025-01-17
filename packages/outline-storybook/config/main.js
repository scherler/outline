const path = require('path');
const outlineConfig = require('../../outline.config');

const excludedStories = outlineConfig.excludedStories;
function getExcluded() {
  return excludedStories.join('|');
}

module.exports = {
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../assets'],
  stories: [
    // // Explicitly order the main documentation.
    './stories/guides/welcome.stories.mdx',
    // // Intentionally order the Code Style Guide pages.
    // './stories/guides/development/component-development/01-main.stories.mdx',
    // //'./stories/guides/development/component-development/stories.@(js|ts|mdx)',
    // // Other stories in the .storybook directory.
    // './stories/**/*.stories.@(js|ts|mdx)',
    // // All other components in src directory except those excluded on outlineConfig.
    ...(excludedStories.length
      ? [`../components/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
      : [`../components/**/*.stories.@(js|ts|mdx)`]),
    './stories/!(guides|tokens|demonstration|examples)**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
};
