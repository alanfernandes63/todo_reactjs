import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root:{
      maxHeight: 400,
      overflow: 'auto',
      backgroundColor: theme.palette.background.paper,
      marginTop:100
    }
  }));

  export default useStyles;