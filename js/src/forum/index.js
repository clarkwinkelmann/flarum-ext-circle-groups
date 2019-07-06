import {extend} from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';

app.initializers.add('clarkwinkelmann-circle-groups', () => {
    extend(PostUser.prototype, 'view', function (vnode) {
        const user = this.props.post.user();

        // If the post belongs to a deleted user, skip
        if (!user) {
            return;
        }

        // Because badges aren't an actual model in the store,
        // we read the ItemList containing the badge components
        // That way we can also support third-party tags that might have been added
        const firstColoredBadge = user.badges().toArray().find(badge => {
            return badge.props.style && badge.props.style.backgroundColor;
        });

        // If there are no color badges, skip
        if (!firstColoredBadge) {
            return;
        }

        const matchTag = tag => {
            return node => node && node.tag && node.tag === tag;
        };

        const matchClass = className => {
            return node => node && node.attrs && node.attrs.className && node.attrs.className === className;
        };

        const avatar = vnode.children.find(matchTag('h3'))
            .children.find(matchTag('a'))
            .children.find(matchClass('Avatar PostUser-avatar'));

        avatar.attrs = avatar.attrs || {};
        avatar.attrs.style = avatar.attrs.style || {};
        avatar.attrs.style.borderColor = firstColoredBadge.props.style.backgroundColor;
    });
});
