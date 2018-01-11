import Reducer from './appReducer';
import createStore from './lib/store';

const Store = createStore(Reducer);

export default Store;
