/* eslint-disable no-shadow */
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import sveltePreprocess from 'svelte-preprocess';

const buildForRelease = false;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: buildForRelease,
        format: 'es',
        file: 'dist/custom-button.js',
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                sourceMap: buildForRelease,
            }),
            // emitCss: true,
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !buildForRelease,
                enableSourcemap: buildForRelease,
                customElement: true,
            },
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte', 'core-js'],
        }),
        commonjs(),
        babel({
            extensions: ['.svelte', '.js'], // XXX important!!
            presets: [
                ['@babel/preset-env', {
                    // targets: '2018-04', // for newer functions
                    targets: 'supports es6-module and supports async-functions, not opera > 0, not samsung > 0, not and_qq > 0', // same as vite https://vitejs.dev/guide/build.html#browser-compatibility
                    forceAllTransforms: true,
                    useBuiltIns: 'usage',
                    corejs: 3,
                }],
            ],
            exclude: ['node_modules/**'], // <= /!\ NOT 'node_mobules/**'
            babelHelpers: 'bundled',
        }),

        buildForRelease && terser(),
        buildForRelease && filesize({
            showMinifiedSize: false,
            // showBrotliSize: true,
        }),
    ],
};
