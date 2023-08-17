import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@media (max-width: 600px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',

  // button: {
  //   marginLeft: 'auto'
  // }
})