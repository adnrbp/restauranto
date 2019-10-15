import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Config Enzyme to use React-16 adapter
Enzyme.configure({ 
  adapter: new Adapter() 
});
