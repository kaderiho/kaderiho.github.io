import Reducer from './appStore';
import createStore from './lib/store';

const Store = createStore(Reducer);

export default Store;
