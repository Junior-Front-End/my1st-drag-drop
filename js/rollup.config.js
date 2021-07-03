// rollup.config.js
export default [ 
    {
      input: '_/index.js',
      watch: true,
      output: { 
          file: 'build/bundle.js', 
          format: 'cjs' 
        }
    }
  ]