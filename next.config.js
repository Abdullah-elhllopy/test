/** @type {import('next').NextConfig} */


const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false
            }
        }

        return config;
    },
    publicRuntimeConfig: {
        databaseFolderPath: '/database',
    },
}

module.exports = nextConfig
