import { Typography } from "@material-ui/core"
import useStyles from '../utils/styles';

export default function  Footer (){
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Typography>All rights reserved. Next Amazona.</Typography>
        </footer>
    )
}