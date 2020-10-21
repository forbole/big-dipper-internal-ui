import React from 'react';
import classnames from 'classnames';
import { NavOpenProps } from './types';
import { useGetStyles } from './styles';

const NavOpen = (props: NavOpenProps) => {
  const { classes } = useGetStyles();
  const { menu: { isMenuOpen: isNavOpen } } = props;
  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-open', {
        open: isNavOpen,
      })}
    >
      <div
        className={classnames(classes.content, 'mobile-nav-open-content')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum quam erat, rutrum sagittis velit lacinia vitae. Etiam lobortis consectetur lorem ut ultrices. Aenean vitae finibus est. In ac elit sed nibh sodales venenatis. Donec sollicitudin massa nec malesuada blandit. Aenean et quam vitae nisi tincidunt sodales non id nisi. Fusce dapibus eros imperdiet fermentum auctor. Vestibulum sed ante consequat, varius magna at, vestibulum urna. Proin hendrerit, neque sit amet feugiat aliquet, sem dui viverra erat, id efficitur augue elit vel eros. Pellentesque lacinia mauris at tellus sollicitudin consectetur.

        Etiam eu mi pharetra, mattis elit eget, ullamcorper lorem. In scelerisque placerat leo faucibus vestibulum. Morbi vitae scelerisque turpis. Sed tortor turpis, varius sed gravida sed, congue ut neque. Quisque eu venenatis nibh, et cursus lectus. Nunc sed rutrum eros. Donec vulputate nibh in ante malesuada, sit amet commodo tortor condimentum.

        Praesent eu tincidunt tellus. Praesent odio felis, iaculis ut ipsum ut, rutrum tincidunt sapien. Maecenas id mauris tincidunt, sodales velit dictum, ornare ligula. Aliquam euismod mauris est, id molestie ligula consequat ut. Mauris enim elit, varius id tempus et, rhoncus et lorem. Nullam eget finibus nisi. Nunc vestibulum lacus ipsum, nec accumsan quam semper sit amet. Mauris nunc eros, mattis quis felis sed, bibendum blandit erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed diam efficitur, dictum dolor vel, porta tortor. Aliquam placerat ligula vel aliquam rutrum. Praesent volutpat leo velit, bibendum congue sem eleifend ut.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum quam erat, rutrum sagittis velit lacinia vitae. Etiam lobortis consectetur lorem ut ultrices. Aenean vitae finibus est. In ac elit sed nibh sodales venenatis. Donec sollicitudin massa nec malesuada blandit. Aenean et quam vitae nisi tincidunt sodales non id nisi. Fusce dapibus eros imperdiet fermentum auctor. Vestibulum sed ante consequat, varius magna at, vestibulum urna. Proin hendrerit, neque sit amet feugiat aliquet, sem dui viverra erat, id efficitur augue elit vel eros. Pellentesque lacinia mauris at tellus sollicitudin consectetur.

        Etiam eu mi pharetra, mattis elit eget, ullamcorper lorem. In scelerisque placerat leo faucibus vestibulum. Morbi vitae scelerisque turpis. Sed tortor turpis, varius sed gravida sed, congue ut neque. Quisque eu venenatis nibh, et cursus lectus. Nunc sed rutrum eros. Donec vulputate nibh in ante malesuada, sit amet commodo tortor condimentum.

        Praesent eu tincidunt tellus. Praesent odio felis, iaculis ut ipsum ut, rutrum tincidunt sapien. Maecenas id mauris tincidunt, sodales velit dictum, ornare ligula. Aliquam euismod mauris est, id molestie ligula consequat ut. Mauris enim elit, varius id tempus et, rhoncus et lorem. Nullam eget finibus nisi. Nunc vestibulum lacus ipsum, nec accumsan quam semper sit amet. Mauris nunc eros, mattis quis felis sed, bibendum blandit erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed diam efficitur, dictum dolor vel, porta tortor. Aliquam placerat ligula vel aliquam rutrum. Praesent volutpat leo velit, bibendum congue sem eleifend ut.
      </div>
    </div>
  );
};

export default NavOpen;
