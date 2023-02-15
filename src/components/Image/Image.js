import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef } from 'react';

const Image = forwardRef(({ className, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)} ref={ref} {...props} />;
});

Image.propTypes = {
    className: propTypes.string,
};

export default Image;
