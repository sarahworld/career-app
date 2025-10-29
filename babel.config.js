// File: babel.config.js
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                safe: false,
                allowUndefined: true,
            },
        ],
    ],
};
