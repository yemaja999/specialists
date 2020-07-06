import React from 'react';
import {AvatarStyled} from './styledComponents/common/AvatarStyled';
import {shadeColor} from '../util/shadeColor';
import {generateInitials} from '../util/generateInitials';
import {getColor} from '../util/getColor';

export const Avatar =  React.memo(function({index, img, name}) {
    const color = getColor(index);

    return (
        <AvatarStyled
            color={color}
            bgColor={shadeColor(color, 10)}
            img={img}>
            {!img && generateInitials(name)}
        </AvatarStyled>
    );
});
