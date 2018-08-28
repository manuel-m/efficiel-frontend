const customers = {
    data: [],
    done: false,
    fetch: _customer_fetch,
    get: _customer_get,
    error: ''
};

export default customers;

function _customer_fetch() {
    return axios
        .get('customers.json')
        .then(function(response_) {
            customers.data = response_.data;
        })
        .catch(function(error) {
            customers.error = 'customers fetch failed';
        })
        .then(function() {
            customers.done = true;
        });
}

function _customer_get(id_) {
    const _found = customers.data.find(item_ => item_.id === id_);
    return _found;
}
