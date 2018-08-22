var fs = require('fs-extra');

// root site
fs.emptyDirSync('dist');

['app.js', 'img', 'icons', 'index.html', 'style.css'].forEach(src_ => {
    fs.copySync(src_, 'dist/' + src_);
});

// casita site
fs.emptyDirSync('dist/apps/casita');

['index.html', 'app.min.css', 'app.js', 'img'].forEach(src_ => {
    fs.copySync('apps/casita/' + src_, 'dist/apps/casita/' + src_);
});
