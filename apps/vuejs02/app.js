!function() {
    "use strict";
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
                var _vm = this, _h = _vm.$createElement;
                _vm._self._c;
                return _vm._m(0);
            },
            staticRenderFns: [ function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("div", [ _c("div", [ _vm._v("home") ]), _vm._v(" "), _c("ul", [ _c("li", [ _vm._v("lala") ]) ]) ]);
            } ]
        }, void 0, {}, void 0, !1, void 0, void 0, void 0)
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
                "customers-list": function(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
                    const component = ("function" == typeof script$$1 ? script$$1.options : script$$1) || {};
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
                }, "data-v-1adc49b0", !1, void 0, __vue_create_injector__, void 0)
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
