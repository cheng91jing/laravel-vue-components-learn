let mix = require('laravel-mix');

// version does not work in hmr mode
// if (process.env.npm_lifecycle_event !== 'hot') {
//     mix.version()
// }
const path = require('path');
// fix css files 404 issue
mix.webpackConfig({
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    }
});


mix.sass('./src/app.scss', 'dist')
    .js('src/app.js', 'dist')
	.extract(['lodash', 'popper.js', 'jquery', 'bootstrap', 'axios', 'vue', 'vue-router']);