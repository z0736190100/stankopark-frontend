import React from "react";
import {connect} from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import LoginForm from "under_construction/components/LoginForm.jsx";

import loginPageStyle from "assets/jss/material-dashboard-react/views/loginStyle.jsx";


import image from "assets/img/sidebar-1.jpg";

//FIXME: CardFooter buttons centering- bad
class LoginPage extends React.Component {
  state = {
    cardAnimaton: "cardHidden"
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: "" });
    }, 777);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "contain",
            //backgroundRepeat: "no-repeat",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <div className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Добро Пожаловать!</h4>
                    </CardHeader>
                      <CardBody>
                        <LoginForm/>
                      </CardBody>
                  </div>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return ({ auth });
}

export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));
