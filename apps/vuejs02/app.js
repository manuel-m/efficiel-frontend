(function() {
    "use strict";
    const datePicker = {
        monthNext: _datePicker_monthNext,
        monthPrev: _datePicker_monthPrev,
        proto: _datePicker_proto,
        sync: _datePicker_sync
    };
    function _datePicker_sync(in_) {
        const year_ = in_.year, monthNum_ = in_.month, _month1stDay = new Date(year_, monthNum_), _day = new Date(year_, monthNum_), days = [], _offset = _month1stDay.getDay();
        let _dayClassState = "before";
        _day.setDate(_day.getDate() - _offset);
        for (let i = 0; i < 7 * 6; i++) {
            const _dateDay = _day.getDate();
            if (_dayClassState === "before") {
                if (_dateDay === 1) {
                    _dayClassState = "in";
                }
            } else {
                if (_dayClassState === "in") {
                    if (_dateDay === 1) {
                        _dayClassState = "after";
                    }
                }
            }
            days.push({
                className: _dayClassState,
                label: _dateDay
            });
            _day.setDate(_dateDay + 1);
        }
        return {
            days: days,
            month: in_.month,
            monthlabel: _month1stDay.toLocaleDateString("fr-fr", {
                month: "long"
            }),
            year: in_.year
        };
    }
    function _datePicker_proto() {
        return {
            days: [],
            month: 0,
            monthlabel: "",
            year: 0
        };
    }
    function _datePicker_monthNext(in_) {
        return in_.month === 11 ? {
            year: in_.year + 1,
            month: 0
        } : {
            year: in_.year,
            month: in_.month + 1
        };
    }
    function _datePicker_monthPrev(in_) {
        return in_.month === 0 ? {
            year: in_.year - 1,
            month: 11
        } : {
            year: in_.year,
            month: in_.month - 1
        };
    }
    var script = {
        created() {
            this.m = datePicker.sync({
                month: this.month,
                year: this.year
            });
        },
        data() {
            return {
                m: datePicker.proto()
            };
        },
        methods: {
            monthNext() {
                this.m = datePicker.sync(datePicker.monthNext(this.m));
            },
            monthPrev() {
                this.m = datePicker.sync(datePicker.monthPrev(this.m));
            }
        },
        props: {
            month: Number,
            year: Number
        }
    };
    const __vue_script__ = script;
    var __vue_render__ = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "date-picker"
        }, [ _c("div", {
            staticClass: "nav"
        }, [ _c("div", {
            staticClass: "nav-month"
        }, [ _vm._v(_vm._s(_vm.m.monthlabel + " " + _vm.m.year)) ]), _vm._v(" "), _c("div", {
            staticClass: "nav-prev",
            on: {
                click: function($event) {
                    $event.preventDefault();
                    return _vm.monthPrev($event);
                }
            }
        }, [ _vm._v("<") ]), _vm._v(" "), _c("div", {
            staticClass: "nav-next",
            on: {
                click: function($event) {
                    $event.preventDefault();
                    return _vm.monthNext($event);
                }
            }
        }, [ _vm._v(">") ]) ]), _vm._v(" "), _c("div", {
            staticClass: "matrix"
        }, [ _c("div", {
            staticClass: "row"
        }, _vm._l("DLMMJVS", function(label_weekDay, wd_i) {
            return _c("div", {
                key: wd_i,
                staticClass: "day"
            }, [ _vm._v(_vm._s(label_weekDay)) ]);
        })), _vm._v(" "), _vm._l(6, function(row_n) {
            return _c("div", {
                key: row_n,
                staticClass: "row"
            }, _vm._l(7, function(n) {
                return _c("div", {
                    key: n,
                    class: "item " + _vm.m.days[n - 1 + (row_n - 1) * 7].className
                }, [ _vm._v("\n                    " + _vm._s(_vm.m.days[n - 1 + (row_n - 1) * 7].label) + "\n            ") ]);
            }));
        }) ], 2) ]);
    };
    var __vue_staticRenderFns__ = [];
    const __vue_inject_styles__ = function(inject) {
        if (!inject) return;
        inject("data-v-46e1cdf8_0", {
            source: "\n.date-picker[data-v-46e1cdf8]{font-size:14px;width:16rem;user-select:none;border:#aaa 1px solid;padding:.3rem\n}\n.nav[data-v-46e1cdf8]{display:flex;align-items:center;height:40px;padding-left:.6rem\n}\n.nav-month[data-v-46e1cdf8]{flex-grow:1\n}\n.nav-next[data-v-46e1cdf8],.nav-prev[data-v-46e1cdf8]{flex-shrink:0;padding:.6rem\n}\n.row[data-v-46e1cdf8]{display:flex\n}\n.row>*[data-v-46e1cdf8]{width:2rem;text-align:center;padding:.3rem\n}\n.day[data-v-46e1cdf8],.item.after[data-v-46e1cdf8],.item.before[data-v-46e1cdf8]{opacity:.25\n}",
            map: undefined,
            media: undefined
        });
    };
    const __vue_scope_id__ = "data-v-46e1cdf8";
    const __vue_module_identifier__ = undefined;
    const __vue_is_functional_template__ = false;
    function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script$$1 === "function" ? script$$1.options : script$$1) || {};
        component.__file = "date-picker.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        {
            let hook;
            if (style) {
                hook = function(context) {
                    style.call(this, createInjector(context));
                };
            }
            if (hook !== undefined) {
                if (component.functional) {
                    const originalRender = component.render;
                    component.render = function renderWithStyleInjection(h, context) {
                        hook.call(context);
                        return originalRender(h, context);
                    };
                } else {
                    const existing = component.beforeCreate;
                    component.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
                }
            }
        }
        return component;
    }
    function __vue_create_injector__() {
        const head = document.head || document.getElementsByTagName("head")[0];
        const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        return function addStyle(id, css) {
            if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;
            const group = isOldIE ? css.media || "default" : id;
            const style = styles[group] || (styles[group] = {
                ids: [],
                parts: [],
                element: undefined
            });
            if (!style.ids.includes(id)) {
                let code = css.source;
                let index = style.ids.length;
                style.ids.push(id);
                if (css.map) {
                    code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
                    code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
                }
                if (isOldIE) {
                    style.element = style.element || document.querySelector("style[data-group=" + group + "]");
                }
                if (!style.element) {
                    const el = style.element = document.createElement("style");
                    el.type = "text/css";
                    if (css.media) el.setAttribute("media", css.media);
                    if (isOldIE) {
                        el.setAttribute("data-group", group);
                        el.setAttribute("data-next-index", "0");
                    }
                    head.appendChild(el);
                }
                if (isOldIE) {
                    index = parseInt(style.element.getAttribute("data-next-index"));
                    style.element.setAttribute("data-next-index", index + 1);
                }
                if (style.element.styleSheet) {
                    style.parts.push(code);
                    style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
                } else {
                    const textNode = document.createTextNode(code);
                    const nodes = style.element.childNodes;
                    if (nodes[index]) style.element.removeChild(nodes[index]);
                    if (nodes.length) style.element.insertBefore(textNode, nodes[index]); else style.element.appendChild(textNode);
                }
            }
        };
    }
    var datePickerVue = __vue_normalize__({
        render: __vue_render__,
        staticRenderFns: __vue_staticRenderFns__
    }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);
    var script$1 = {
        components: {
            "date-picker": datePickerVue
        },
        data() {
            const _now = new Date();
            return {
                monthnum: _now.getMonth(),
                year: _now.getFullYear()
            };
        }
    };
    const __vue_script__$1 = script$1;
    var __vue_render__$1 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("date-picker", {
            attrs: {
                year: _vm.year,
                month: _vm.monthnum
            }
        });
    };
    var __vue_staticRenderFns__$1 = [];
    const __vue_inject_styles__$1 = undefined;
    const __vue_scope_id__$1 = undefined;
    const __vue_module_identifier__$1 = undefined;
    const __vue_is_functional_template__$1 = false;
    function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "calendar-page.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        return component;
    }
    var calendar = __vue_normalize__$1({
        render: __vue_render__$1,
        staticRenderFns: __vue_staticRenderFns__$1
    }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);
    var script$2 = {};
    const __vue_script__$2 = script$2;
    var __vue_render__$2 = function(_h, _vm) {
        var _c = _vm._c;
        return _vm._m(0);
    };
    var __vue_staticRenderFns__$2 = [ function(_h, _vm) {
        var _c = _vm._c;
        return _c("div", [ _c("span", [ _c("button", [ _vm._v("functional Clickme!!!") ]) ]) ]);
    } ];
    const __vue_inject_styles__$2 = undefined;
    const __vue_scope_id__$2 = undefined;
    const __vue_module_identifier__$2 = undefined;
    const __vue_is_functional_template__$2 = true;
    function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "func-compo.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        return component;
    }
    var funcCompo = __vue_normalize__$2({
        render: __vue_render__$2,
        staticRenderFns: __vue_staticRenderFns__$2
    }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);
    var script$3 = {
        components: {
            "func-compo": funcCompo
        }
    };
    const __vue_script__$3 = script$3;
    var __vue_render__$3 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", [ _c("div", [ _vm._v("home") ]), _vm._v(" "), _c("func-compo"), _vm._v(" "), _vm._m(0) ], 1);
    };
    var __vue_staticRenderFns__$3 = [ function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("ul", [ _c("li", [ _vm._v("lala") ]) ]);
    } ];
    const __vue_inject_styles__$3 = undefined;
    const __vue_scope_id__$3 = undefined;
    const __vue_module_identifier__$3 = undefined;
    const __vue_is_functional_template__$3 = false;
    function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "home.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        return component;
    }
    var home = __vue_normalize__$3({
        render: __vue_render__$3,
        staticRenderFns: __vue_staticRenderFns__$3
    }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);
    const customers = {
        data: [],
        done: false,
        fetch: _customer_fetch,
        get: _customer_get,
        error: ""
    };
    function _customer_fetch() {
        return axios.get("customers.json").then(function(response_) {
            customers.data = response_.data;
        }).catch(function(error) {
            customers.error = "customers fetch failed";
        }).then(function() {
            customers.done = true;
        });
    }
    function _customer_get(id_) {
        const _found = customers.data.find(item_ => item_.id === id_);
        return _found;
    }
    var script$4 = {
        data() {
            return {
                items: customers.data
            };
        }
    };
    const __vue_script__$4 = script$4;
    var __vue_render__$4 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("ul", _vm._l(_vm.items, function(item) {
            return _c("li", {
                key: item.id
            }, [ _vm._v(_vm._s(item.last_name) + " \n        "), _c("router-link", {
                attrs: {
                    to: {
                        path: "/customer/" + item.id
                    }
                }
            }, [ _vm._v("go") ]) ], 1);
        }));
    };
    var __vue_staticRenderFns__$4 = [];
    const __vue_inject_styles__$4 = function(inject) {
        if (!inject) return;
        inject("data-v-1adc49b0_0", {
            source: "\nul[data-v-1adc49b0]{list-style:none\n}",
            map: undefined,
            media: undefined
        });
    };
    const __vue_scope_id__$4 = "data-v-1adc49b0";
    const __vue_module_identifier__$4 = undefined;
    const __vue_is_functional_template__$4 = false;
    function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "customers-list.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        {
            let hook;
            if (style) {
                hook = function(context) {
                    style.call(this, createInjector(context));
                };
            }
            if (hook !== undefined) {
                if (component.functional) {
                    const originalRender = component.render;
                    component.render = function renderWithStyleInjection(h, context) {
                        hook.call(context);
                        return originalRender(h, context);
                    };
                } else {
                    const existing = component.beforeCreate;
                    component.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
                }
            }
        }
        return component;
    }
    function __vue_create_injector__$1() {
        const head = document.head || document.getElementsByTagName("head")[0];
        const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
        const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        return function addStyle(id, css) {
            if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;
            const group = isOldIE ? css.media || "default" : id;
            const style = styles[group] || (styles[group] = {
                ids: [],
                parts: [],
                element: undefined
            });
            if (!style.ids.includes(id)) {
                let code = css.source;
                let index = style.ids.length;
                style.ids.push(id);
                if (css.map) {
                    code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
                    code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
                }
                if (isOldIE) {
                    style.element = style.element || document.querySelector("style[data-group=" + group + "]");
                }
                if (!style.element) {
                    const el = style.element = document.createElement("style");
                    el.type = "text/css";
                    if (css.media) el.setAttribute("media", css.media);
                    if (isOldIE) {
                        el.setAttribute("data-group", group);
                        el.setAttribute("data-next-index", "0");
                    }
                    head.appendChild(el);
                }
                if (isOldIE) {
                    index = parseInt(style.element.getAttribute("data-next-index"));
                    style.element.setAttribute("data-next-index", index + 1);
                }
                if (style.element.styleSheet) {
                    style.parts.push(code);
                    style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
                } else {
                    const textNode = document.createTextNode(code);
                    const nodes = style.element.childNodes;
                    if (nodes[index]) style.element.removeChild(nodes[index]);
                    if (nodes.length) style.element.insertBefore(textNode, nodes[index]); else style.element.appendChild(textNode);
                }
            }
        };
    }
    var customersList = __vue_normalize__$4({
        render: __vue_render__$4,
        staticRenderFns: __vue_staticRenderFns__$4
    }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, __vue_create_injector__$1, undefined);
    var script$5 = {
        components: {
            "customers-list": customersList
        },
        beforeRouteEnter(to, from, next) {
            customers.fetch().then(next);
        }
    };
    const __vue_script__$5 = script$5;
    var __vue_render__$5 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", [ _c("div", [ _vm._v("Customers") ]), _vm._v(" "), _c("customers-list") ], 1);
    };
    var __vue_staticRenderFns__$5 = [];
    const __vue_inject_styles__$5 = undefined;
    const __vue_scope_id__$5 = undefined;
    const __vue_module_identifier__$5 = undefined;
    const __vue_is_functional_template__$5 = false;
    function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "customers.page.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        return component;
    }
    var customersPage = __vue_normalize__$5({
        render: __vue_render__$5,
        staticRenderFns: __vue_staticRenderFns__$5
    }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);
    var script$6 = {
        beforeRouteEnter(to, from, next) {
            if (customers.done === false) {
                customers.fetch().then(next);
            } else {
                next();
            }
        },
        data() {
            return {
                item: customers.get(parseInt(this.id))
            };
        },
        props: [ "id" ]
    };
    const __vue_script__$6 = script$6;
    var __vue_render__$6 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("pre", [ _vm._v(_vm._s(JSON.stringify(_vm.item, undefined, 1)) + " ") ]);
    };
    var __vue_staticRenderFns__$6 = [];
    const __vue_inject_styles__$6 = undefined;
    const __vue_scope_id__$6 = undefined;
    const __vue_module_identifier__$6 = undefined;
    const __vue_is_functional_template__$6 = false;
    function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = (typeof script === "function" ? script.options : script) || {};
        component.__file = "customer.page.vue";
        if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;
            if (functional) component.functional = true;
        }
        component._scopeId = scope;
        return component;
    }
    var customerPage = __vue_normalize__$6({
        render: __vue_render__$6,
        staticRenderFns: __vue_staticRenderFns__$6
    }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);
    var routes = [ {
        path: "/home",
        component: home
    }, {
        path: "/calendar",
        component: calendar
    }, {
        path: "/customers",
        component: customersPage
    }, {
        path: "/customer/:id",
        component: customerPage,
        props: true
    } ];
    const router = new VueRouter({
        routes: routes
    });
    const app = new Vue({
        router: router
    }).$mount("#app");
})();
