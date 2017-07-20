import { extend } from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';

app.initializers.add('clarkwinkelmann-circle-groups', () => {
    extend(PostUser.prototype, 'view', function(vnode) {
        const badges = this.props.post.user().badges().toArray();

        const matchTag = tag => {
            return node => node && node.tag && node.tag === tag;
        };

        const matchClass = className => {
            return node => node && node.attrs && node.attrs.className && node.attrs.className === className;
        };

        const avatar = vnode.children.find(matchTag('h3'))
            .children.find(matchTag('a'))
            .children.find(matchClass('Avatar PostUser-avatar'));

        // Only add the colored border if the user has a badge that has a hard-coded background color
        if (badges.length && badges[0].props.style && badges[0].props.style.backgroundColor) {
            avatar.attrs = avatar.attrs || {};
            avatar.attrs.style = avatar.attrs.style || {};
            avatar.attrs.style.borderColor = badges[0].props.style.backgroundColor;
        }

        return vnode;
    });
});
