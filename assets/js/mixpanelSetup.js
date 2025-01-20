const MIXPANEL_TOKEN = "94f0ab6bc2c290ca3e1767bdb5799eb6";
const MIXPANEL_PROPERTY_BLACKLIST = [
  "$browser",
  "$browser_version",
  "$os",
  "$screen_height",
  "$screen_width",
  "mp_lib",
  "$lib_version",
];
  
(function (f, b) {
    if (!b.__SV) {
        var a, e, i, g;
        window.mixpanel = b;
        b._i = [];
        b.init = function (a, e, d) {
            function f(b, h) {
                var a = h.split(".");
                2 == a.length && (b = b[a[0]], h = a[1]);
                b[h] = function () {
                    b.push([h].concat(Array.prototype.slice.call(arguments, 0)));
                };
            }
            var c = b;
            "undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
            c.people = c.people || [];
            c.toString = function (b) {
                var a = "mixpanel";
                "mixpanel" !== d && (a += "." + d);
                b || (a += " (stub)");
                return a;
            };
            c.people.toString = function () {
                return c.toString(1) + ".people (stub)";
            };
            i = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user opt_out_tracking opt_in_tracking has_opted_out_tracking clear_opt_out_in_tracking".split(
                " "
            );
            for (g = 0; g < i.length; g++) f(c, i[g]);
            b._i.push([a, e, d]);
        };
        b.__SV = 1.2;
        a = f.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
        e = f.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(a, e);
    }
})(document, window.mixpanel || []);

mixpanel.init(MIXPANEL_TOKEN, {
    // debug: true,
    persistence: "localStorage",
    property_blacklist: MIXPANEL_PROPERTY_BLACKLIST,
});

window.mixpanel = mixpanel;
