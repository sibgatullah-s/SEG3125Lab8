import React, { Component } from 'react';
import Todos from './Todos'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Grid } from '@material-ui/core'
import outdoor from "./images/outdoor.jpg"
import indoor from "./images/indoor.jpg"
import spacing from '@material-ui/system'
import outbuilding1 from "./images/outbuilding1.jpg"
import outbuilding2 from "./images/outbuilding2.jpg"
import outbuilding3 from "./images/outbuilding3.jpg"
import outbuilding4 from "./images/outbuilding4.jpg"
import outhouse1 from "./images/outhouse1.jpg"
import outhouse2 from "./images/outhouse2.jpg"
import outhouse3 from "./images/outhouse3.jpg"
import outhouse4 from "./images/outhouse4.jpg"
import outcabin1 from "./images/outcabin1.jpg"
import outcabin2 from "./images/outcabin2.jpg"
import outcabin3 from "./images/outcabin3.jpg"
import outcabin4 from "./images/outcabin4.jpg"
import inbuilding1 from "./images/inbuilding1.jpg"
import inbuilding2 from "./images/inbuilding2.jpg"
import inbuilding3 from "./images/inbuilding3.jpg"
import inbuilding4 from "./images/inbuilding4.jpg"
import inhouse1 from "./images/inhouse1.jpg"
import inhouse2 from "./images/inhouse2.jpg"
import inhouse3 from "./images/inhouse3.png"
import inhouse4 from "./images/inhouse4.jpg"
import incabin1 from "./images/incabin1.jpg"
import incabin2 from "./images/incabin2.jpg"
import incabin3 from "./images/incabin3.jpg"
import incabin4 from "./images/incabin4.jpg"
import home from "./images/home.png"
import gallery from "./images/gallery.png"
import en from "./en.json"
import fr from "./fr.json"

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ],
    activeKey: 1,
    rect1: {
      fill: '#D3D3D3'
    },
    rect2: {
      fill: '#000'
    },
    color: "#000",
    price: "Price:",
    width: null,
    validWidth: false,
    validHeight: false,
    height: null,
    paint: null,
    language: en
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  handleSelect = (eventKey) => {
    this.setState({
      activeKey: eventKey
    });
  }
  test = () => {
    this.handleSelect(2);
  }
  test1 = () => {
    this.handleSelect(1);
  }
  test2 = () => {
    this.handleSelect(4);
  }
  test3 = () => {
    this.handleSelect(5);
  }
  test4 = () => {
    this.handleSelect(6);
  }
  test5 = () => {
    this.handleSelect(7);
  }
  test6 = () => {
    this.handleSelect(8);
  }
  test7 = () => {
    this.handleSelect(9);
  }
  changeColor1 = (event) => {
    // console.log("colevent", event.target.value);
    this.setState({
      rect1: {
        fill: event.target.value
      }
    })
  }
  changeColor2 = (event) => {
    this.setState({
      rect2: {
        fill: event.target.value
      }
    })
  }
  changeColor3 = (event) => {
    this.setState({
      color: event.target.value
    })
  }
  width = (event) => {
    if (this.checkValue(event.target.value)) {
      this.setState({
        width: event.target.value,
        validWidth: true
      })
    } else {
      this.setState({
        validWidth: false
      })
    }
    
  }
  height = (event) => {
    if (this.checkValue(event.target.value)) {
      this.setState({
        height: event.target.value,
        validHeight: true
      })
    } else {
      this.setState({
        validHeight: false
      })
    }
  }
  checkValue = (value) => {
    var filter = /^[0-9]*$/;
    if (filter.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  paint = (event) => {
    this.setState({
      paint: event.target.value
    })
  }
  calculate = () => {
    // console.log("vals", this.state.width, this.state.height, this.state.paint);
    if (this.state.validWidth && this.state.validHeight && this.state.paint != null) {
      // french?
      this.setState({
        price: this.state.language.p1 + this.state.width*this.state.height*this.state.paint + this.state.language.p3
      })
    } else {
      // french?
      this.setState({
        price: this.state.language.p2
      })
    }
  }
  setLanguage = (event) => {
    if (event.target.value == "en") {
      this.setState({
        language: en,
        price: en.p1
      })
    } else {
      this.setState({
        language: fr,
        price: fr.p1
      })
    }
  }
  render() {
    let classError = {"backgroundColor": "red"};
    let classWidth = {};
    let classHeight = {};
    if (!this.state.validWidth) {
      classWidth = classError;
    }
    if (!this.state.validHeight) {
      classHeight = classError;
    }
    return (
      <div className="todo-app container">
          <Navbar bg="light" onSelect={this.handleSelect}>
            <Nav.Link eventKey={1}>
              <Navbar.Brand className="text-primary" id="brand">Superior Colors</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">
                <Nav.Link eventKey={1}><img className="icons" src={home}></img>{this.state.language.nav1}</Nav.Link>
                <Nav.Link eventKey={3}><img className="icons" src={gallery}></img>{this.state.language.nav2}</Nav.Link>
              </Nav>
              <Nav variant="tabs" className="ml-auto">
                <Nav.Link className="pull-right">
                  <select className="custom-select" id="typep" onChange={this.setLanguage} data-toggle="tooltip" data-placement="top" title={this.state.language.lang}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <Grid container direction="row">
            <div className="typep">
              {this.state.language.lang}
              <select className="custom-select" id="typep" onChange={this.setLanguage}>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </Grid> */}
        <Tab.Container id="pt1" defaultActiveKey={this.state.key} activeKey={this.state.activeKey}>
          <Tab.Content>
              <Tab.Pane eventKey={1}>
                <h1 className="center blue-text">{this.state.language.nav1}</h1>
                <div className="container">	
                <div className="wrapper">	
                <div className="arrow-steps clearfix">
                        <div className="step current" id="step1a"> <span>{this.state.language.prog1}</span> </div>
                        <div className="step" id="step2a" onClick={this.test}> <span>{this.state.language.prog2}</span> </div>
                    </div>
                </div>
                </div>
                {/* <Form>
                  <Form.Group as={Row} controlId="formDim" id="dim">
                    <Form.Label>Dimensions:</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control placeholder="Width" onChange={this.width}/>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Height" onChange={this.height}/>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form> */}
                <Grid container direction="column" justify="center" alignItems="center">
                  <Form>
                    <Form.Group as={Row} controlId="formDim" id="dim">
                      <Form.Label data-toggle="tooltip" data-placement="top" title={this.state.language.tt1}>Dimensions:</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control placeholder={this.state.language.f1} onChange={this.width} style={classWidth}/>
                        </Col>
                        <Col>
                          <Form.Control placeholder={this.state.language.f2} onChange={this.height} style={classHeight}/>
                        </Col>
                      </Row>
                    </Form.Group>
                    {/* <Grid container direction="row" justery="center" alignItems="center" spacing={2}>
                      <Grid container item xs={6}>
                        <Form.Control placeholder="Width" onChange={this.width}/>
                      </Grid>
                      <Grid container item xs={6}>
                        <Form.Control placeholder="Height" onChange={this.height}/>
                      </Grid>
                    </Grid> */}
                  </Form>
                  <div className="text-center" id="selcolor">
                    <h5 data-toggle="tooltip" data-placement="top" title={this.state.language.tt2}>{this.state.language.t1}</h5>
                  </div>
                  <div className="rects">
                    <div className="rect">
                      <svg width="100" height="100">
                        <rect width="100" height="100" style={this.state.rect1}></rect>
                      </svg>
                      <br></br>
                      <div className="colorp">
                       <input type="color" id="rect1p" value={this.state.rect1.fill} onChange={this.changeColor1}></input>
                      </div>
                    </div>
                    <div className="rect">
                      <svg width="100" height="100">
                        <rect width="100" height="100" style={this.state.rect2}></rect>
                      </svg>
                      <br></br>
                      <div className="colorp">
                       <input type="color" id="rect2p" value={this.state.rect2.fill} onChange={this.changeColor2}></input>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="colorsel" data-toggle="tooltip" data-placement="top" title={this.state.language.tt3}>
                    {this.state.language.t2}
                    <input type="color" id="rect3p" value={this.state.color} onChange={this.changeColor3}></input>
                  </div>
                  <div className="typep" data-toggle="tooltip" data-placement="top" title={this.state.language.tt4}>
                    {this.state.language.t3}
                  <select className="custom-select" id="typep" onChange={this.paint}>
                    <option value="10">{this.state.language.s1}</option>
                    <option value="20">{this.state.language.s2}</option>
                    <option value="30">{this.state.language.s3}</option>
                  </select>
                  </div>

                  <div className="pbtn" id="calcprice" data-toggle="tooltip" data-placement="top" title={this.state.language.tt5}>
                    <Button variant="primary" onClick={this.calculate}>{this.state.language.t4}</Button>
                  </div>

                  <div className="price">
                    <div className="form-control-static">{this.state.price}</div>
                  </div>
                    
                  <div className="pbtn">
                    <a href="#" className="next" onClick={this.test}>{this.state.language.t5}</a>
                  </div>
                </Grid>
                
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={2}>
              <h1 className="center blue-text">{this.state.language.nav1}</h1>
                <div className="container">	
                <div className="wrapper">	
                <div className="arrow-steps clearfix">
                        <div className="step" id="step1a" onClick={this.test1}> <span>{this.state.language.nav1}</span> </div>
                        <div className="step current" id="step2a"> <span>{this.state.language.prog2}</span> </div>
                    </div>
                </div>
                </div>
                <Grid container direction="column" justify="center" alignItems="center">
                  <form id="part2">
                    <div className="form-group">
                      <label htmlFor="fn">{this.state.language.t6}</label>
                      <input id="fn" type="text" className="form-control" placeholder={this.state.language.t7}></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="ln">{this.state.language.t8}</label>
                      <input id="ln" type="text" className="form-control" placeholder={this.state.language.t9}></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="addr">{this.state.language.t10}</label>
                      <textarea className="form-control" id="addr" rows="3"></textarea>
                    </div>
                  </form>
                </Grid>
                {/* <form id="part2">
                  <div class="form-group">
                    <label for="fn">First name</label>
                    <input id="fn" type="text" class="form-control" placeholder="Enter first name"></input>
                  </div>
                  <div class="form-group">
                    <label for="ln">First name</label>
                    <input id="ln" type="text" class="form-control" placeholder="Enter last name"></input>
                  </div>
                  <div class="form-group">
                    <label for="addr">Address</label>
                    <textarea class="form-control" id="addr" rows="3"></textarea>
                  </div>
                </form> */}
                <div className="pbtn">
                 <Button variant="primary">{this.state.language.sub1}</Button>
                </div>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={3}>
              <div>
                <h1 className="center blue-text">{this.state.language.nav2}</h1>
              </div>

              <Grid container direction="row" alignItems="center" spacing={3}>
                <Grid container item xs={6}  justify="center" alignItems="center">
                  <img src={outdoor} alt=""></img>
                  <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.language.o1}
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" onClick={this.test2}>{this.state.language.o2}</a>
                      <a className="dropdown-item" onClick={this.test3}>{this.state.language.o3}</a>
                      <a className="dropdown-item" onClick={this.test4}>{this.state.language.o4}</a>
                    </div>
                  </div>
                </Grid>
                <Grid container item xs={6} justify="center" alignItems="center">
                  <img src={indoor} alt=""></img>
                  <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.language.o5}
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" onClick={this.test5}>{this.state.language.o6}</a>
                      <a className="dropdown-item" onClick={this.test6}>{this.state.language.o7}</a>
                      <a className="dropdown-item" onClick={this.test7}>{this.state.language.o8}</a>
                    </div>
                  </div>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={4}>
              <div>
                <h1 className="center blue-text">Buildings</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={outbuilding1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outbuilding2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outbuilding3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outbuilding4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={5}>
              <div>
                <h1 className="center blue-text">Houses</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={outhouse1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outhouse2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outhouse3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outhouse4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={6}>
              <div>
                <h1 className="center blue-text">Cabins</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={outcabin1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outcabin2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outcabin3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={outcabin4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={7}>
              <div>
                <h1 className="center blue-text">Buildings</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={inbuilding1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inbuilding2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inbuilding3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inbuilding4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={8}>
              <div>
                <h1 className="center blue-text">Houses</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={inhouse1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inhouse2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inhouse3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={inhouse4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={9}>
              <div>
                <h1 className="center blue-text">Cabins</h1>
              </div>

              <Grid container direction="row" spacing={3}>
                <Grid container item xs={6}  justify="center">
                  <img src={incabin1} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={incabin2} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={incabin3} alt=""></img>
                </Grid>
                <Grid container item xs={6}  justify="center">
                  <img src={incabin4} alt=""></img>
                </Grid>
              </Grid>
              </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> */}

      </div>
    );
  }

}

export default App;
