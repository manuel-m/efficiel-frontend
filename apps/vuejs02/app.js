(function () {
    'use strict';

    /* script */

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm._m(0)
    };
    var __vue_staticRenderFns__ = [
      function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", [
          _c("div", [_vm._v("home")]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("lala")])])
        ])
      }
    ];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = undefined;
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/home/dr/w/efficiel/frontend/et18Grid/apps/vuejs02/js/components/home.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) component.functional = true;
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      
      /* style inject SSR */
      

      
      var home = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        {},
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    const customers = {
        data: [],
        done: false,
        fetch: _customer_fetch,
        get: _customer_get,
        error: ''
    };

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

    //
    var script = {
        data() {
            return {
                items: customers.data
            };
        }
    };

    /* script */
                const __vue_script__ = script;
                
    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "ul",
        _vm._l(_vm.items, function(item) {
          return _c(
            "li",
            { key: item.id },
            [
              _vm._v(_vm._s(item.last_name) + " \n        "),
              _c(
                "router-link",
                { attrs: { to: { path: "/customer/" + item.id } } },
                [_vm._v("go")]
              )
            ],
            1
          )
        })
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = function (inject) {
        if (!inject) return
        inject("data-v-082f5120_0", { source: "\nul[data-v-082f5120] {\n    list-style: none;\n}\n", map: {"version":3,"sources":["/home/dr/w/efficiel/frontend/et18Grid/apps/vuejs02/js/components/customers/customers-list.vue"],"names":[],"mappings":";AAsBA;IACA,iBAAA;CACA","file":"customers-list.vue","sourcesContent":["<template>\n    <ul>\n        <li v-for=\"item in items\" :key=\"item.id\">{{item.last_name}} \n            <router-link :to=\"{path:'/customer/'+item.id}\">go</router-link> \n        </li>\n    </ul>\n</template>\n\n\n<script>\nimport customers from './customers';\nexport default {\n    data() {\n        return {\n            items: customers.data\n        };\n    }\n};\n</script>\n\n\n<style scoped>\nul {\n    list-style: none;\n}\n</style>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$1 = "data-v-082f5120";
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* component normalizer */
      function __vue_normalize__$1(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/home/dr/w/efficiel/frontend/et18Grid/apps/vuejs02/js/components/customers/customers-list.vue";

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
              // register for functional component in vue file
              const originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              const existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        const head = document.head || document.getElementsByTagName('head')[0];
        const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        const isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

          const group = isOldIE ? css.media || 'default' : id;
          const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            let code = css.source;
            let index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              const el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) el.setAttribute('media', css.media);
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index]) style.element.removeChild(nodes[index]);
              if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
              else style.element.appendChild(textNode);
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var customersList = __vue_normalize__$1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        __vue_create_injector__,
        undefined
      );

    //

    var script$1 = {
        components: {
            'customers-list': customersList
        },
        beforeRouteEnter(to, from, next) {
            customers.fetch().then(next);
        }
    };

    /* script */
                const __vue_script__$1 = script$1;
                
    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [_c("div", [_vm._v("Customers")]), _vm._v(" "), _c("customers-list")],
        1
      )
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* component normalizer */
      function __vue_normalize__$2(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/home/dr/w/efficiel/frontend/et18Grid/apps/vuejs02/js/components/customers/customers.page.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) component.functional = true;
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      
      /* style inject SSR */
      

      
      var customersPage = __vue_normalize__$2(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$1,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    //
    var script$2 = {
        beforeRouteEnter(to, from, next) {
            if (customers.done === false) {
                customers.fetch().then(next);
            } else {
                next();
            }
        },
        data() {
            return { item: customers.get(parseInt(this.id)) };
        },
        props: ['id']
    };

    /* script */
                const __vue_script__$2 = script$2;
                
    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("pre", [
        _vm._v(_vm._s(JSON.stringify(_vm.item, undefined, 1)) + " ")
      ])
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

      /* style */
      const __vue_inject_styles__$3 = function (inject) {
        if (!inject) return
        inject("data-v-79156740_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"customer.page.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$3 = undefined;
      /* module identifier */
      const __vue_module_identifier__$3 = undefined;
      /* functional template */
      const __vue_is_functional_template__$3 = false;
      /* component normalizer */
      function __vue_normalize__$3(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/home/dr/w/efficiel/frontend/et18Grid/apps/vuejs02/js/components/customers/customer.page.vue";

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
              // register for functional component in vue file
              const originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              const existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__$1() {
        const head = document.head || document.getElementsByTagName('head')[0];
        const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
        const isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

          const group = isOldIE ? css.media || 'default' : id;
          const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            let code = css.source;
            let index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              const el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) el.setAttribute('media', css.media);
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index]) style.element.removeChild(nodes[index]);
              if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
              else style.element.appendChild(textNode);
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var customerPage = __vue_normalize__$3(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$2,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        __vue_create_injector__$1,
        undefined
      );

    var routes = [
        { path: '/home', component: home },
        { path: '/customers', component: customersPage },
        { path: '/customer/:id', component: customerPage, props: true }
    ];

    const router = new VueRouter({
        routes
    });

    const app = new Vue({
        router
    }).$mount('#app');

}());
