!function() {
    "use strict";
    function DatePicker(in_) {
        const year_ = in_.year, monthNum_ = in_.month, _month1stDay = new Date(year_, monthNum_), _day = new Date(year_, monthNum_), days = [], _offset = _month1stDay.getDay();
        let _dayClassState = 0 === _offset ? "in" : "before";
        _day.setDate(_day.getDate() - _offset);
        for (let i = 0; i < 42; i++) {
            const _dateDay = _day.getDate();
            "before" === _dayClassState ? 1 === _dateDay && (_dayClassState = "in") : "in" === _dayClassState && 1 === _dateDay && (_dayClassState = "after"), 
            days.push({
                className: _dayClassState,
                label: _dateDay
            }), _day.setDate(_dateDay + 1);
        }
        return {
            days: days,
            monthlabel: _month1stDay.toLocaleDateString("fr-fr", {
                month: "long"
            })
        };
    }
    function __vue_create_injector__() {
        const head = document.head || document.getElementsByTagName("head")[0], styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {}), isOldIE = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        return function(id, css) {
            if (!document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
                const group = isOldIE ? css.media || "default" : id, style = styles[group] || (styles[group] = {
                    ids: [],
                    parts: [],
                    element: void 0
                });
                if (!style.ids.includes(id)) {
                    let code = css.source, index = style.ids.length;
                    if (style.ids.push(id), css.map && (code += "\n/*# sourceURL=" + css.map.sources[0] + " */", 
                    code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */"), 
                    isOldIE && (style.element = style.element || document.querySelector("style[data-group=" + group + "]")), 
                    !style.element) {
                        const el = style.element = document.createElement("style");
                        el.type = "text/css", css.media && el.setAttribute("media", css.media), isOldIE && (el.setAttribute("data-group", group), 
                        el.setAttribute("data-next-index", "0")), head.appendChild(el);
                    }
                    if (isOldIE && (index = parseInt(style.element.getAttribute("data-next-index")), 
                    style.element.setAttribute("data-next-index", index + 1)), style.element.styleSheet) style.parts.push(code), 
                    style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n"); else {
                        const textNode = document.createTextNode(code), nodes = style.element.childNodes;
                        nodes[index] && style.element.removeChild(nodes[index]), nodes.length ? style.element.insertBefore(textNode, nodes[index]) : style.element.appendChild(textNode);
                    }
                }
            }
        };
    }
    function _customer_fetch() {
        return axios.get("customers.json").then(function(response_) {
            customers.data = response_.data;
        }).catch(function(error) {
            customers.error = "customers fetch failed";
        }).then(function() {
            customers.done = !0;
        });
    }
    function _customer_get(id_) {
        return customers.data.find(item_ => item_.id === id_);
    }
    function __vue_create_injector__$1() {
        const head = document.head || document.getElementsByTagName("head")[0], styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {}), isOldIE = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        return function(id, css) {
            if (!document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
                const group = isOldIE ? css.media || "default" : id, style = styles[group] || (styles[group] = {
                    ids: [],
                    parts: [],
                    element: void 0
                });
                if (!style.ids.includes(id)) {
                    let code = css.source, index = style.ids.length;
                    if (style.ids.push(id), css.map && (code += "\n/*# sourceURL=" + css.map.sources[0] + " */", 
                    code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */"), 
                    isOldIE && (style.element = style.element || document.querySelector("style[data-group=" + group + "]")), 
                    !style.element) {
                        const el = style.element = document.createElement("style");
                        el.type = "text/css", css.media && el.setAttribute("media", css.media), isOldIE && (el.setAttribute("data-group", group), 
                        el.setAttribute("data-next-index", "0")), head.appendChild(el);
                    }
                    if (isOldIE && (index = parseInt(style.element.getAttribute("data-next-index")), 
                    style.element.setAttribute("data-next-index", index + 1)), style.element.styleSheet) style.parts.push(code), 
                    style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n"); else {
                        const textNode = document.createTextNode(code), nodes = style.element.childNodes;
                        nodes[index] && style.element.removeChild(nodes[index]), nodes.length ? style.element.insertBefore(textNode, nodes[index]) : style.element.appendChild(textNode);
                    }
                }
            }
        };
    }
    var calendar = function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
        const component = ("function" == typeof script ? script.options : script) || {};
        return component.__file = "calendar-page.vue", component.render || (component.render = template.render, 
        component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
        functional && (component.functional = !0)), component._scopeId = scope, component;
    }({
        render: function() {
            var _vm = this, _h = _vm.$createElement;
            return (_vm._self._c || _h)("date-picker", {
                attrs: {
                    year: _vm.year,
                    month: _vm.monthnum
                }
            });
        },
        staticRenderFns: []
    }, void 0, {
        components: {
            "date-picker": function(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
                const component = ("function" == typeof script$$1 ? script$$1.options : script$$1) || {};
                component.__file = "date-picker.vue", component.render || (component.render = template.render, 
                component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
                functional && (component.functional = !0)), component._scopeId = scope;
                {
                    let hook;
                    if (style && (hook = function(context) {
                        style.call(this, createInjector(context));
                    }), void 0 !== hook) if (component.functional) {
                        const originalRender = component.render;
                        component.render = function(h, context) {
                            return hook.call(context), originalRender(h, context);
                        };
                    } else {
                        const existing = component.beforeCreate;
                        component.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
                    }
                }
                return component;
            }({
                render: function() {
                    var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                    return _c("div", {
                        staticClass: "date-picker"
                    }, [ _c("div", {
                        staticClass: "nav"
                    }, [ _c("div", {
                        staticClass: "nav-month"
                    }, [ _vm._v(_vm._s(_vm.monthlabel + " " + _vm.year)) ]), _vm._v(" "), _c("div", {
                        staticClass: "nav-prev"
                    }, [ _vm._v("<") ]), _vm._v(" "), _c("div", {
                        staticClass: "nav-next"
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
                                class: "item " + _vm.days[n - 1 + 7 * (row_n - 1)].className
                            }, [ _vm._v("\n                    " + _vm._s(_vm.days[n - 1 + 7 * (row_n - 1)].label) + "\n            ") ]);
                        }));
                    }) ], 2) ]);
                },
                staticRenderFns: []
            }, function(inject) {
                inject && inject("data-v-04c9328c_0", {
                    source: "\n.date-picker[data-v-04c9328c]{font-size:14px;width:16rem;user-select:none;border:#aaa 1px solid;padding:.3rem\n}\n.nav[data-v-04c9328c]{display:flex;align-items:center;height:40px;padding-left:.6rem\n}\n.nav-month[data-v-04c9328c]{flex-grow:1\n}\n.nav-next[data-v-04c9328c],.nav-prev[data-v-04c9328c]{flex-shrink:0;padding:.6rem\n}\n.row[data-v-04c9328c]{display:flex\n}\n.row>*[data-v-04c9328c]{width:2rem;text-align:center;padding:.3rem\n}\n.item.after[data-v-04c9328c],.item.before[data-v-04c9328c]{opacity:.25\n}\n.day[data-v-04c9328c]{opacity:.25\n}",
                    map: void 0,
                    media: void 0
                });
            }, {
                created() {
                    Object.assign(this, DatePicker({
                        month: this.month,
                        year: this.year
                    }));
                },
                props: {
                    month: Number,
                    year: Number
                },
                data() {
                    return {
                        days: [],
                        monthlabel: ""
                    };
                }
            }, "data-v-04c9328c", !1, void 0, __vue_create_injector__, void 0)
        },
        data() {
            const _now = new Date();
            return {
                monthnum: _now.getMonth(),
                year: _now.getFullYear()
            };
        }
    }, void 0, !1, void 0, void 0, void 0);
    const customers = {
        data: [],
        done: !1,
        fetch: _customer_fetch,
        get: _customer_get,
        error: ""
    };
    var routes = [ {
        path: "/home",
        component: function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
            const component = ("function" == typeof script ? script.options : script) || {};
            return component.__file = "home.vue", component.render || (component.render = template.render, 
            component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
            functional && (component.functional = !0)), component._scopeId = scope, component;
        }({
            render: function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("div", [ _c("div", [ _vm._v("home") ]), _vm._v(" "), _c("func-compo"), _vm._v(" "), _vm._m(0) ], 1);
            },
            staticRenderFns: [ function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("ul", [ _c("li", [ _vm._v("lala") ]) ]);
            } ]
        }, void 0, {
            components: {
                "func-compo": function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
                    const component = ("function" == typeof script ? script.options : script) || {};
                    return component.__file = "func-compo.vue", component.render || (component.render = template.render, 
                    component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
                    functional && (component.functional = !0)), component._scopeId = scope, component;
                }({
                    render: function(_h, _vm) {
                        _vm._c;
                        return _vm._m(0);
                    },
                    staticRenderFns: [ function(_h, _vm) {
                        var _c = _vm._c;
                        return _c("div", [ _c("span", [ _c("button", [ _vm._v("functional Clickme!!!") ]) ]) ]);
                    } ]
                }, void 0, {}, void 0, !0, void 0, void 0, void 0)
            }
        }, void 0, !1, void 0, void 0, void 0)
    }, {
        path: "/calendar",
        component: calendar
    }, {
        path: "/customers",
        component: function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
            const component = ("function" == typeof script ? script.options : script) || {};
            return component.__file = "customers.page.vue", component.render || (component.render = template.render, 
            component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
            functional && (component.functional = !0)), component._scopeId = scope, component;
        }({
            render: function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("div", [ _c("div", [ _vm._v("Customers") ]), _vm._v(" "), _c("customers-list") ], 1);
            },
            staticRenderFns: []
        }, void 0, {
            components: {
                "customers-list": function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
                    const component = ("function" == typeof script ? script.options : script) || {};
                    component.__file = "customers-list.vue", component.render || (component.render = template.render, 
                    component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
                    functional && (component.functional = !0)), component._scopeId = scope;
                    {
                        let hook;
                        if (style && (hook = function(context) {
                            style.call(this, createInjector(context));
                        }), void 0 !== hook) if (component.functional) {
                            const originalRender = component.render;
                            component.render = function(h, context) {
                                return hook.call(context), originalRender(h, context);
                            };
                        } else {
                            const existing = component.beforeCreate;
                            component.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
                        }
                    }
                    return component;
                }({
                    render: function() {
                        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
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
                    },
                    staticRenderFns: []
                }, function(inject) {
                    inject && inject("data-v-1adc49b0_0", {
                        source: "\nul[data-v-1adc49b0]{list-style:none\n}",
                        map: void 0,
                        media: void 0
                    });
                }, {
                    data() {
                        return {
                            items: customers.data
                        };
                    }
                }, "data-v-1adc49b0", !1, void 0, __vue_create_injector__$1, void 0)
            },
            beforeRouteEnter(to, from, next) {
                customers.fetch().then(next);
            }
        }, void 0, !1, void 0, void 0, void 0)
    }, {
        path: "/customer/:id",
        component: function(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
            const component = ("function" == typeof script ? script.options : script) || {};
            return component.__file = "customer.page.vue", component.render || (component.render = template.render, 
            component.staticRenderFns = template.staticRenderFns, component._compiled = !0, 
            functional && (component.functional = !0)), component._scopeId = scope, component;
        }({
            render: function() {
                var _vm = this, _h = _vm.$createElement;
                return (_vm._self._c || _h)("pre", [ _vm._v(_vm._s(JSON.stringify(_vm.item, void 0, 1)) + " ") ]);
            },
            staticRenderFns: []
        }, void 0, {
            beforeRouteEnter(to, from, next) {
                !1 === customers.done ? customers.fetch().then(next) : next();
            },
            data() {
                return {
                    item: customers.get(parseInt(this.id))
                };
            },
            props: [ "id" ]
        }, void 0, !1, void 0, void 0, void 0),
        props: !0
    } ];
    const router = new VueRouter({
        routes: routes
    });
    new Vue({
        router: router
    }).$mount("#app");
}();
