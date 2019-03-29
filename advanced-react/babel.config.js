module.exports = function(api) {
  api.cache(true);
  const presets = [ '@babel/env','@babel/react' ];
  const plugins = [ 
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose':false
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};