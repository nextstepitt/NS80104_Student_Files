// This file is ignored by Jest running in a sub-folder. The .babelrc file is
// noticed and used in sub-folders. This issue has been reported as #8006:
// https://github.com/facebook/jest/issues/8006.
//

module.exports = (api) => {

    api.cache(true)

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]

    const plugins = [
        [ "transform-es2015-modules-commonjs", { "allowTopLevelThis": true } ]
    ]

    return {
        presets,
        plugins
    }
}
