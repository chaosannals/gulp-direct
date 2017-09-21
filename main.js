const through = require('through2');

module.exports = (options) => {
    return through.obj(function(chunk, e, callback) {
        if ('path' in options) {
            selector = options.path.selector;
            replacement = options.path.replacement;
            chunk.path = chunk.path.replace(selector, replacement);
        }
        this.push(chunk);
        return callback();
    });
};
