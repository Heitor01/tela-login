import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import '../assets/scss/main.scss';
import img from '../assets/images/react.png';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  inputProps: {
    step: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: 50,
    textAlign: 'center',
    border: '5px solid black',
    width: '100%',
  },
  paper1: {
    backgroundColor: 'red',
    marginTop: '13%',
  },
  img: {
    width: '45%',
  },
  appbar: {
    marginLeft: '-20.20%',
    marginTop: '-20%',
    width: '139.99%',
  },
});


function ButtonAppBar(props) {
  const { classes } = props;
  this.state = {open: false};
  const handleToggle = () => this.setState({open: !this.state.open});
  const handleClose = () => this.setState({open: false});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <Grid container spacing={8} alignItems="center" justify="center">
        <Paper className={classes.paper}>
		<AppBar position="static" className={classes.appbar}>
          <Drawer docked={false} width={200} open={this.state.open}  onRequestChange={(open) => this.setState({open})}>
			<List>
				<ListItem>NOME</ListItem>
				<ListItem>NOME2</ListItem>
			</List>
		  </Drawer>
          <Toolbar>
          <IconButton onClick={this.handleToggle} className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          </Toolbar>
      </AppBar>
          <img src={img} alt="React" className={classes.img} /><br />
          <form onSubmit={handleSubmit} noValidate>
            <TextField id="email" type="email" label="Usuário" className={classes.user} /><br />
            <TextField id="password" type="password" label="Senha" className={classes.senha} />
            <AppBar position="static" className={classes.paper1}>
              <Button type="submit" color="contrast">Login</Button>
            </AppBar>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

