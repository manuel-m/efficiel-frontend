const _callbacks = [];
let _resizeTimeout = null;

export default {
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
