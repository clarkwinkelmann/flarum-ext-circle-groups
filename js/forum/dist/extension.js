'use strict';

System.register('clarkwinkelmann/circle-groups/main', ['flarum/extend', 'flarum/components/PostUser'], function (_export, _context) {
    "use strict";

    var extend, PostUser;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPostUser) {
            PostUser = _flarumComponentsPostUser.default;
        }],
        execute: function () {

            app.initializers.add('clarkwinkelmann-circle-groups', function () {
                extend(PostUser.prototype, 'view', function (vnode) {
                    var badges = this.props.post.user().badges().toArray();

                    var matchTag = function matchTag(tag) {
                        return function (node) {
                            return node && node.tag && node.tag === tag;
                        };
                    };

                    var matchClass = function matchClass(className) {
                        return function (node) {
                            return node && node.attrs && node.attrs.className && node.attrs.className === className;
                        };
                    };

                    var avatar = vnode.children.find(matchTag('h3')).children.find(matchTag('a')).children.find(matchClass('Avatar PostUser-avatar'));

                    // Only add the colored border if the user has a badge that has a hard-coded background color
                    if (badges.length && badges[0].props.style && badges[0].props.style.backgroundColor) {
                        avatar.attrs = avatar.attrs || {};
                        avatar.attrs.style = avatar.attrs.style || {};
                        avatar.attrs.style.borderColor = badges[0].props.style.backgroundColor;
                    }

                    return vnode;
                });
            });
        }
    };
});