import React from 'react';
import {AvatarStyled} from './styledComponents/common/AvatarStyled';
import {shadeColor} from '../util/shadeColor';
import {generateInitials} from '../util/generateInitials';
import {randomColor} from '../util/randomColor';

export const Avatar =  React.memo(function({img, name}) {
    const color = randomColor();

    return (
        <AvatarStyled
            color={color}
            bgColor={shadeColor(color, 10)}
            img={img}>
            {!img && generateInitials(name)}
        </AvatarStyled>
    );
});
