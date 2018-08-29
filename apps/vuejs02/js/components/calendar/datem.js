export { DatePicker, DatePickerProto, monthLabel };

function DatePicker(in_) {
    const year_ = in_.year,
        monthNum_ = in_.month,
        _month1stDay = new Date(year_, monthNum_),
        _day = new Date(year_, monthNum_),
        days = [],
        _offset = _month1stDay.getDay();

    let _dayClassState = _offset === 0 ? 'in' : 'before';

    _day.setDate(_day.getDate() - _offset);
    for (let i = 0; i < 7 * 6; i++) {
        const _dateDay = _day.getDate();

        if (_dayClassState === 'before') {
            if (_dateDay === 1) {
                _dayClassState = 'in';
            }
        } else {
            if (_dayClassState === 'in') {
                if (_dateDay === 1) {
                    _dayClassState = 'after';
                }
            }
        }

        days.push({ className: _dayClassState, label: _dateDay });
        _day.setDate(_dateDay + 1);
    }

    return {
        days,
        monthlabel: _month1stDay.toLocaleDateString('fr-fr', { month: 'long' })
    };

    function _updateClassState(dateDay_) {
        if (_dayClassState === 'before') {
        }
    }
}

function DatePickerProto() {
    return {
        days: [],
        monthlabel: ''
    };
}
