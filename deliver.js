var fs = require('fs-extra');

// root site
fs.emptyDirSync('dist');

_copyDist('.', ['app.js', 'img', 'icons', 'index.html', 'style.css']);

_copyDist('apps/casita', ['index.html', 'app.min.css', 'app.js', 'img']);

function _copyDist(root_, files_) {
    fs.emptyDirSync('dist/' + root_);
    files_.forEach(src_ => {
        fs.copySync(root_ + '/' + src_, 'dist/' + root_ + '/' + src_);
    });
}
