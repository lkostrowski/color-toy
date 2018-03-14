import {css} from 'glamor';

css.global('html,body', {
    fontFamily: 'Montserrat, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
});

css.global('*', {
    boxSizing: 'inherit',
    fontWeight: '300',
    fontFamily: 'inherit'
});

css.insert(`
  @font-face {
    font-family: 'Montserrat';
    src: url('/Montserrat-Light.ttf');
    font-weight: 300;
  }
`);
