import Navbar from "./Navbar";
import Footer from './Footer';
import useStyles from '../utils/styles';


export default function Layout({ title, description, Children }){
    return (
      <>
        <Navbar title={title} description={description} />
        {Children}
       
      </>
    )
  }

// import Head from 'next/head'
// import Footer from "./Footer";
// import NextLink from 'next/link';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Link,
// } from '@material-ui/core';
// export default function Layout({Children}) {
//   const classes = useStyles();
//   return (
//     <div>
//         <Head>
//             <title>Next Amazona</title>
//         </Head>
//       <AppBar position="static" className={classes.navbar}>
//             <Toolbar>
//           <NextLink href="/" passHref>
//             <Link>
//               <Typography className={classes.brand}>amazona</Typography>
//             </Link>
//           </NextLink>
//           <div className={classes.grow}></div>
//           <div>
//             <NextLink href="/cart" passHref>
//               <Link>Cart</Link>
//             </NextLink>
//             <NextLink href="/login" passHref>
//               <Link>Login</Link>
//             </NextLink>
//           </div>
//             </Toolbar>
//         </AppBar>
//       <Container className={classes.main}>container
//         {Children}
//               {console.log(Children)}
//         </Container>
//       <footer className={classes.footer}>
//         <Typography>All rights reserved. Next Amazona.</Typography>
//       </footer>
//     </div>
//   )
// }
