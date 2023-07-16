import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvavatrProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean,
}

export default function Avatar({hasBorder, ...props}: AvavatrProps ){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}