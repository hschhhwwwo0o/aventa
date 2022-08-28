module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./components",
            "@screens": "./screens",
            "@router": "./router",
            "@assets": "./assets",
            "@icons": "./icons",
            "@hooks": "./hooks",
            "@constants": "./constants",
            "@store": "./store",
            "@sql": "./sql",
            "@layouts": "./layouts",
            "@types": "./types",
            "@localization": "./localization",
            "@styles": "./styles",
          },
        },
      ],
    ],
  };
};
