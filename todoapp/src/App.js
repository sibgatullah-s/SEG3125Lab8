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
    height: null,
    paint: null
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  handleSelect = (eventKey, optA=null) => {
    console.log("testfunction", eventKey);
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
    this.setState({
      width: event.target.value
    })
    if (this.state.width != null && this.state.height != null && this.state.paint != null) {
      this.calculate();
    }
  }
  height = (event) => {
    this.setState({
      height: event.target.value
    })
    if (this.state.width != null && this.state.height != null && this.state.paint != null) {
      this.calculate();
    }
  }
  paint = (event) => {
    this.setState({
      paint: event.target.value
    })
    if (this.state.width != null && this.state.height != null && this.state.paint != null) {
      this.calculate();
    }
  }
  calculate = () => {
    console.log("vals", this.state.width, this.state.height, this.state.paint)
    this.setState({
      price: "Price: $" + this.state.width*this.state.height*this.state.paint
    })
  }
  render() {
    return (
      <div className="todo-app container">
          <Navbar bg="light" onSelect={this.handleSelect}>
            <Nav.Link eventKey={1}>
              <Navbar.Brand>Superior Colors</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">
                <Nav.Link eventKey={1}>Home</Nav.Link>
                <Nav.Link eventKey={3}>Gallery</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
        <Tab.Container id="pt1" defaultActiveKey={this.state.key} activeKey={this.state.activeKey}>
          <Tab.Content>
              <Tab.Pane eventKey={1}>
                <h1 className="center blue-text">Home</h1>
                <div className="container">	
                <div className="wrapper">	
                <div className="arrow-steps clearfix">
                        <div className="step current" id="step1a"> <span>Specs</span> </div>
                        <div className="step" id="step2a" onClick={this.test}> <span>Personal Info</span> </div>
                    </div>
                </div>
                </div>
                <Form>
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
                </Form>
                <div className="procc">
                  <div className="text-center" id="selcolor">
                    <h5>Select and Compare Colors</h5>
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
                  
                </div>

                <div className="colorsel">
                  Select Color:
                  <input type="color" id="rect3p" value={this.state.color} onChange={this.changeColor3}></input>
                </div>
                <div className="typep">
                  Select a Type of Paint:
                <select className="custom-select" id="typep" onClick={this.paint}>
                  <option value="10">Matte</option>
                  <option value="20">Eggshell</option>
                  <option value="30">Satin</option>
                </select>
                </div>

                <div className="price">
                  <p className="form-control-static">{this.state.price}</p>
                </div>

                <div className="pbtn">
                  <a href="#" className="next" onClick={this.test}>Next</a>
                </div>
                
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={2}>
              <h1 className="center blue-text">Home</h1>
                <div className="container">	
                <div className="wrapper">	
                <div className="arrow-steps clearfix">
                        <div className="step" id="step1a" onClick={this.test1}> <span>Specs</span> </div>
                        <div className="step current" id="step2a"> <span>Personal Info</span> </div>
                    </div>
                </div>
                </div>
                <form id="part2">
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
                </form>
                <div className="pbtn">
                 <Button variant="success">Submit</Button>
                </div>
              </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
              <Tab.Pane eventKey={3}>
              <div>
                <h1 className="center blue-text">Gallery</h1>
              </div>
              <div className="container">
                <div className="col-sm-2">
                  <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Outdoor
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Buildings</a>
                      <a className="dropdown-item" href="#">Houses</a>
                      <a className="dropdown-item" href="#">Cabins</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Indoor
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Townhouses</a>
                      <a className="dropdown-item" href="#">Houses</a>
                      <a className="dropdown-item" href="#">Offices</a>
                    </div>
                  </div>
                </div>
              </div>
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
