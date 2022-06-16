/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');


module.exports = {
    nextConfig,
    i18n,
    webpack(config) {
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
