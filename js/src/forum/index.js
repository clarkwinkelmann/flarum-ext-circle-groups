import app from 'flarum/app';
import {extend} from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';
import Link from 'flarum/components/Link';

app.initializers.add('clarkwinkelmann-circle-groups', () => {
    extend(PostUser.prototype, 'view', function (vnode) {
        const user = this.attrs.post.user();

        // If the post belongs to a deleted user, skip
        if (!user) {
            return;
        }

        // Find the first group that has a color
        // We don't read badges because we would need to support every badge component and its attrs
        const firstColoredGroup = user.groups().find(group => {
            return group.color();
        });

        // If there are no color groups, skip
        if (!firstColoredGroup) {
            return;
        }

        const matchTag = tag => {
            return node => node && node.tag && node.tag === tag;
        };

        const matchClass = className => {
            return node => node && node.attrs && node.attrs.className && node.attrs.className === className;
        };

        const avatar = vnode.children.find(matchTag('h3'))
            .children.find(matchTag(Link))
            .children.find(matchClass('Avatar PostUser-avatar'));

        avatar.attrs = avatar.attrs || {};
        avatar.attrs.style = avatar.attrs.style || {};
        avatar.attrs.style.borderColor = firstColoredGroup.color();
    });
});
