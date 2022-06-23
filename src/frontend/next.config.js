/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { patchWebpackConfig } = require('next-global-css');
module.exports = {
    nextConfig,
    i18n,
    webpack: (config, options) => {
        if (process.env.CYPRESS === 'true') {
            //Allows importing the global.css file in cypress/support/component.ts
            patchWebpackConfig(config, options);
        }
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        
        return config;
    },
    images: {
        domains: ['app.thefeedfactory.nl'],
    },
};
