import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
  

function App() {
  return (
    <div>{
      
      customers.map(c =>{
        return(
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            date={c.date}
            address={c.address}
            contact={c.contact}
          />
        )
      }
      )
      }
      
    </div>
    

  );
}

export default App;
