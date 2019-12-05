import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { id: 1, key: 1, name: 'dva' },
      { id: 2, key: 2, name: 'next' },
    ],
    lists: [{ id: 1, key: 1, name: 'dva' },
    { id: 2, key: 2, name: 'next' },]
  }
})

// 2. Plugins
// app.use({});
app.use(createLoading());
console.log(createLoading());
// 3. Model
app.model(require('./models/products').default)
app.model(require('./models/lists').default)
app.model(require('./models/example').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
