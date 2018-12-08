import withMatchMediaProps from '@hocs/with-match-media-props';

const screens = {
  sm: 320,
  md: 1080,
  lg: 1440,
};

const { sm, md, lg } = screens;

const withResponsive = withMatchMediaProps({
  isSM: { minWidth: sm },
  isOnlySM: { minWidth: sm, maxWidth: md - 1 },
  isMD: { minWidth: md },
  isOnlyMD: { minWidth: md, maxWidth: lg - 1 },
  isLG: { minWidth: lg },
});

export { withResponsive };
