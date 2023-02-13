import { makeStyles } from 'tss-react/mui';
 
export default makeStyles()((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: "#fafafa",
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}));  
