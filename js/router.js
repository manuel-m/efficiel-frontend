let _page = 'home',
    _pages = Array.from(document.querySelectorAll('[data-page]')).reduce(
        (pages_, page_) => {
            pages_[page_.dataset.page] = page_;
            return pages_;
        },
        {}
    );

function _nav(page_) {
    if (page_ === _page) return;
    _pages[_page].classList.remove('active');
    _page = page_;
    _pages[_page].classList.add('active');
}

export default {
    init() {
        // page display toggle
        _pages = Array.from(document.querySelectorAll('[data-page]')).reduce(
            (pages_, page_) => {
                pages_[page_.dataset.page] = page_;
                return pages_;
            },
            {}
        );

        // nav listeners
        Array.from(document.querySelectorAll('[data-nav]')).forEach(el_ => {
            el_.addEventListener('click', () => {
                _nav(el_.dataset.nav);
            });
        });
    }
};
