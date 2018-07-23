import resize from './resize';

const _navBarMenu = document.getElementById('navbar--menu'),
    _navBarMenuSpacing = document.getElementById('navbar--menu-spacing');

let _breakpoint_px = 0,
    _expanded = false;

export default {
    init: _navBarInit
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
