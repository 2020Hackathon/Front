import React from 'react';
import classNames from 'classnames/bind';
import style from './Button.scss';

const cx = classNames.bind(style);

const Button = ({
    handleFunction,
    content
}) => {
    return(
        <button className={cx('ButtonStyle')} onClick={handleFunction()}>
            {content}
        </button>
    )
}

export default Button;