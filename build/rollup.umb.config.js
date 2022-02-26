import basicConfig, { file, name } from './rollup.config'
export default {
    ...basicConfig,
    output: {
        name: 'legoComponents',
        file: file('umd'),
        format: 'umd',
        globals: {
            vue: 'Vue',
            lodash: '_',
        },
        exports: 'named'
    }
}
