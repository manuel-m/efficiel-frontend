import vue from 'rollup-plugin-vue';

import uglify from 'rollup-plugin-uglify-es';

const _plugins =
    process.env.NODE_ENV !== 'production'
        ? [vue()]
        : [
              vue(),
              uglify({
                  compress: false,
                  mangle: false,
                  output: { beautify: true }
              })
          ];

export default {
    input: 'apps/vuejs02/js/index.js',
    output: {
        file: 'apps/vuejs02/app.js',
        format: 'iife'
    },
    plugins: _plugins
};
