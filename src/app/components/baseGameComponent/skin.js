import { StyleSheet } from 'aphrodite';
import { typography } from 'util/styleUtil';

const getSkin = (theme) => {
    const skin = theme.get('skinHex');
    const myTypography = typography(theme);

    return StyleSheet.create({
        compTitle: {
            ...myTypography.h5,
            fontWeight: 600,
            color: skin.get('greyColor4')
        }
    });
}

export default getSkin;