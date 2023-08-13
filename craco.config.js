const CracoAlias = require('craco-alias');
const path = require('path');


module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'jsconfig',
                baseUrl: 'src',
                jsConfigPath: 'jsconfig.paths.json',
            },
        },
    ],
    webpack: {
        alias: {
            'src/pages': path.resolve(__dirname, 'src/pages'),
        },
    },
};