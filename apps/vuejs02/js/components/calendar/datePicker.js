const datePicker = {
    monthNext: _datePicker_monthNext,
    monthPrev: _datePicker_monthPrev,
    proto: _datePicker_proto,
    sync: _datePicker_sync
};

export default datePicker;

function _datePicker_sync(in_) {
    const year_ = in_.year,
        monthNum_ = in_.month,
        _month1stDay = new Date(year_, monthNum_),
        _day = new Date(year_, monthNum_),
        days = [],
        _offset = _month1stDay.getDay();

    let _dayClassState = 'before';

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
        month: in_.month,
        monthlabel: _month1stDay.toLocaleDateString('fr-fr', { month: 'long' }),
        year: in_.year
    };
}

function _datePicker_proto() {
    return {
        days: [],
        month: 0,
        monthlabel: '',
        year: 0
    };
}

function _datePicker_monthNext(in_) {
    return in_.month === 11
        ? { year: in_.year + 1, month: 0 }
        : { year: in_.year, month: in_.month + 1 };
}

function _datePicker_monthPrev(in_) {
    return in_.month === 0
        ? { year: in_.year - 1, month: 11 }
        : { year: in_.year, month: in_.month - 1 };
}
