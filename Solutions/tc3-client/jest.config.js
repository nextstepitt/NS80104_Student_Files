module.exports = {
    "verbose": true,
    "modulePaths": [
        "/app/src"
    ],
    "moduleDirectories": [
        "node_modules"
    ],
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/app/__mocks__/styleMock.js"
    },
    "transform": { "\\.jsx?$": ["babel-jest"] }
}
