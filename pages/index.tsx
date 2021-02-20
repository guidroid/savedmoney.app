import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  Divider,
  FilledInput,
  FormControl,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Slide,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { AttachMoney, Close } from "@material-ui/icons";
import React from "react";
import CountUp from "react-countup";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: green[600]
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Index = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section>
        <Container maxWidth="sm">
          <Box p={2} mt={2}>
            <Typography variant="subtitle1" component="p">
              Savings
            </Typography>
            <Typography variant="h1" component="h1">
              <CountUp
                end={9999}
                duration={1.75}
                separator=" "
                decimals={2}
                decimal=","
                prefix="R$ "
              />
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              style={{
                background: green.A700,
                borderRadius: 20,
                fontWeight: 600
              }}
              onClick={handleClickOpen}
            >
              New Saving
            </Button>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="sm">
          <Box mt={4}>
            <Grow in>
              <Card style={{ borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="body1" component="p">
                    Today
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AttachMoney />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Coca-cola"
                        secondary="Jan 9, 2014"
                      />
                      <ListItemSecondaryAction>+10,00</ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grow>
            <Box display="flex" justifyContent="center" mt={2}>
              <Typography
                variant="subtitle2"
                component="p"
                style={{ color: "#707070" }}
              >
                savedmoney.app | 2021
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>

      <section>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                New Saving
              </Typography>
              <Button
                autoFocus
                variant="contained"
                onClick={handleClose}
                style={{ borderRadius: 20 }}
              >
                ADD
              </Button>
            </Toolbar>
          </AppBar>
          <Box mt={4}>
            <Container maxWidth="sm">
              <Typography variant="body1" component="p">
                Keep Calm and Don't Spend. Register your saving money:
              </Typography>
              <form noValidate autoComplete="off">
                <Box mt={2}>
                  <FormControl fullWidth variant="filled">
                    <InputLabel
                      htmlFor="filled-basic"
                      style={{
                        color: "white"
                      }}
                    >
                      Description
                    </InputLabel>
                    <FilledInput
                      style={{
                        color: "white"
                      }}
                      id="filled-basic"
                      variant="filled"
                    />
                  </FormControl>
                </Box>
                <Box mt={2}>
                  <FormControl fullWidth variant="filled">
                    <InputLabel
                      htmlFor="filled-adornment-amount"
                      style={{
                        color: "white"
                      }}
                    >
                      Value
                    </InputLabel>
                    <NumberFormat
                      customInput={FilledInput}
                      thousandSeparator
                      prefix="R$ "
                    />
                  </FormControl>
                </Box>
              </form>
            </Container>
          </Box>
        </Dialog>
      </section>
    </>
  );
};

export default Index;
