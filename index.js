const babar = require('babar');
const fs = require('fs');
const path = require('path');


function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

module.exports = class PostBuildPlugin {
    constructor(options) {
        this.options = options || {
            sizeLimit: 3,
        };
    }

    postBuildProcess = (stats) => {
        // this.cb();
        const { filename } = stats.compilation.options.output;
        const filePath = stats.compilation.options.output.path;
        const data = [];
        const x = [];
        const y = [];
        let i = 0;

        fs.readdir(filePath, (error, files) => {
            files.forEach(file => {
                const { size } = fs.statSync(path.resolve(filePath, file));
                data.push([++i, size]);
            })
            console.log(babar(data, {
                color: 'green',
                width: 40,
                height: 10,
                yFractions: 1
            }));
        });
    }

    apply(compiler) {
        compiler.hooks.done.tap("PostBuildPlugin", this.postBuildProcess);
    }
};
