import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {'id' : 1,
  'image' : 'http://picsum.photos/id/237/64/64',
  'name' : '포캣',
  'date' : '20191123',
  'address' : '논현동',
  'contact' : '02-470-2334'
  },
  {'id' : 2,
  'image' : 'http://picsum.photos/id/231/64/64',
  'name' : '원유니버스',
  'date' : '20180223',
  'address' : '일산',
  'contact' : '02-123-2334'
  },
  {'id' : 3,
  'image' : 'http://picsum.photos/id/230/64/64',
  'name' : '카일스',
  'date' : '20160223',
  'address' : 'LA',
  'contact' : '02-123-4567'
  }
]
  

class App extends Component {
  render() {
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>업체명</TableCell>
            <TableCell>등록일</TableCell>
            <TableCell>지역</TableCell>
            <TableCell>연락처</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image}
            name={c.name} date={c.date} address={c.address} contact={c.contact} /> ) } )
          } 
        </TableBody>
      </Table>
    </Paper>
    

  );
}
}
export default withStyles(styles) (App);
