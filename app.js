(function(params_) {
    const _sections = [];

    // [data-section] register sections
    Array.from(document.querySelectorAll('[data-section]')).forEach(function(
        el_
    ) {
        _sections.push([el_.dataset.section, el_]);
    });

    // [data-nav]="sectionId" => click to display sectionId
    Array.from(document.querySelectorAll('[data-nav]')).forEach(function(el_) {
        el_.addEventListener('click', function() {
            _nav(el_.dataset.nav);
        });
    });

    // defer image background loading
    document.body.style = params_.bodyStyle;

    // defer image loading based on [data-src] attribute
    Array.from(document.querySelectorAll('[data-src]')).forEach(function(el_) {
        el_.src = el_.dataset.src;
    });

    // toggle 'opened' / 'closed' class
    function _nav(newSectionId_) {
        _sections.forEach(function(section_) {
            const _el = section_[1],
                _match = newSectionId_ === section_[0];
            _el.classList.add(_match === true ? 'opened' : 'closed');
            _el.classList.remove(_match === true ? 'closed' : 'opened');
        });
    }
})({
    bodyStyle:
        "background-image: linear-gradient(to top,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('./assets/img/bgetdark.jpg');background-size: cover;"
});
