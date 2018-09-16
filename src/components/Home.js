import React, {Component} from 'react';

//import { Layout, Header, Drawer, Navigation, Content, HeaderRow, Grid, Cell } from 'react-mdl';

export default class Home extends Component{

  constructor(props) {
    super(props);

    this.state = {x:1}
  }

  componentDidMount(){
    this.setState({x:2})
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
         {/*} <Grid style={{width: '100%', backgroundColor: 'yellow'}}>
            <Cell style={{backgroundColor: 'red'}} phone={1}>.</Cell>
            <Cell style={{backgroundColor: 'blue'}} phone={1}>MESA</Cell>
            <Cell style={{backgroundColor: 'pink'}} phone={1}>.</Cell>
            <Cell style={{backgroundColor: 'pink'}} phone={1}>.</Cell>
    </Grid>*/}
      </div>
    );
  }
}