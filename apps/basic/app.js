(function () {
    'use strict';

    const _callbacks = [];
    let _resizeTimeout = null;

    var resize = {
        register(callback_) {
            _callbacks.push(callback_);
        }
    };

    window.addEventListener('resize', _resizeThrottler, false);

    function _resizeThrottler(e_) {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (_resizeTimeout === null) {
            _resizeTimeout = setTimeout(() => {
                _resizeTimeout = null;

                // actual resize handler
                for (let i = 0; i < _callbacks.length; i++) {
                    _callbacks[i](e_);
                }
            }, 60); // 16fps
        }
    }

    const _navBarMenu = document.getElementById('navbar--menu'),
        _navBarMenuSpacing = document.getElementById('navbar--menu-spacing');

    let _breakpoint_px = 0,
        _expanded = false;

    var navbar = {
        init: _navBarInit,
        forceShrink: _navBarForceShrink
    };

    function _navBarInit(in_) {
        if (in_ !== undefined && 'breakpoint_px' in in_) {
            _breakpoint_px = in_.breakpoint_px;
        }
        resize.register(_navBarForceShrink);

        document
            .getElementById('navbar--toggle')
            .addEventListener('click', _navBarExpandToggle);

        document
            .getElementById('navbar--close')
            .addEventListener('click', _navBarForceShrink);
    }

    function _navBarExpandToggle(e_) {
        if (window.innerWidth > _breakpoint_px) {
            // No menu toggle on large screens
            return;
        }
        _expanded = !_expanded;
        (_expanded === true ? _navBarExpand : _navBarShrink)();
    }

    function _navBarExpand() {
        _navBarMenu.classList.add('expanded');
        _navBarMenuSpacing.classList.add('expanded');
    }

    function _navBarShrink() {
        _navBarMenu.classList.remove('expanded');
        _navBarMenuSpacing.classList.remove('expanded');
    }

    function _navBarForceShrink(e_) {
        if (_expanded === true) {
            _expanded = false;
            _navBarShrink();
        }
    }

    let _onAfterNav,
        _page = 'home',
        _pages = Array.from(document.querySelectorAll('[data-page]')).reduce(
            (pages_, page_) => {
                pages_[page_.dataset.page] = page_;
                return pages_;
            },
            {}
        );

    function _nav(page_) {
        if (page_ !== _page) {
            _pages[_page].classList.remove('active');
            _page = page_;
            _pages[_page].classList.add('active');
        }

        if (_onAfterNav !== undefined) {
            _onAfterNav();
        }
    }

    var router = {
        init(onAfterNav_) {
            if (onAfterNav_ !== undefined) {
                _onAfterNav = onAfterNav_;
            }

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

    navbar.init({ breakpoint_px: 700 });
    router.init(navbar.forceShrink);

}());
