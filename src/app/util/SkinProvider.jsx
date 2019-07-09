import { connect } from 'react-redux';
import defaultSkinGuide from 'defaults/skins';

const mapStateToProps = ((state) => {
    const skin = state.get('colorProfiles');

    let skinGuide = defaultSkinGuide;
    if (skin !== undefined) {
        skinGuide = skinGuide.mergeDeep(skin);
    }

    return {
        skinGuide
    };
});

const mapDispatchToProps = () => ({})

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>({
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
})

const applySkin = (WrappedComponent) => connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(WrappedComponent);

export default applySkin;