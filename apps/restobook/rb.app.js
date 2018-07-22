(function() {
    const _reactor = {
        a: _selectItem,
        b: _filterForm
    };
    let _selected,
        _filterExpanded = false;

    document.body.addEventListener('click', function(e_) {
        const _el = e_.target.dataset.m !== undefined ? e_.target : undefined;
        if (_el === undefined) {
            return;
        }
        const _p = _el.dataset.m.split(':');

        _reactor[_p[0]]({ element: _el, evt: e_, value: _p[1] });
    });

    /**
     * @param { element, evt, value} in_
     */
    function _filterForm(in_) {
        _filterExpanded = !_filterExpanded;
        in_.element.classList[_filterExpanded === true ? 'add' : 'remove'](
            'expanded'
        );
    }

    /**
     * @param { element, evt, value} in_
     */
    function _selectItem(in_) {
        const _newSelected = in_.element;

        if (_selected !== undefined) {
            _selected.classList.remove('selected');
        }
        _newSelected.classList.add('selected');
        _selected = _newSelected;
    }
})();
