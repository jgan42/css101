import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from './views/List';
import './App.css';
import { TopBar } from './App.style';
import TitleAttribute from './components/TitleAttribute';
import AfterAttr from './components/AfterAttr';
import OddEven from './components/OddEven';
import Sticky from './components/Sticky';
import Rotation3D from './components/Rotation3D';
import Center from './components/Center';
import Collapse from './components/Collapse';
import Empty from './components/Empty';
import BulkSelectors from './components/BulkSelectors';
import Ellipsis from './components/Ellipsis';
import ClipPath from './components/ClipPath';
import ResponsivePaper from './components/ResponsivePaper';
import WhiteSpace from './components/WhiteSpace';

const App = () => {
  const list = [
    { path: 'bulk-selectors', name: 'Bulk CSS selectors', component: BulkSelectors },
    { path: 'title-attribute', name: 'Title attribute', component: TitleAttribute },
    { path: 'after-attr', name: '":after" with attr()', component: AfterAttr },
    { path: 'odd-even', name: '"odd" or "even"', component: OddEven },
    { path: 'sticky', name: 'Position sticky', component: Sticky },
    { path: 'rotation-3d', name: 'Rotation 3D and Keyframes', component: Rotation3D },
    { path: 'center', name: '3 center possibilities', component: Center },
    { path: 'collapse', name: 'Full CSS Collapse', component: Collapse },
    { path: 'empty', name: '":empty" selector', component: Empty },
    { path: 'ellipsis', name: 'Text ellipsis...', component: Ellipsis },
    { path: 'clip-path', name: 'Clip path', component: ClipPath },
    { path: 'responsive-paper', name: 'Responsive paper with Max-width', component: ResponsivePaper },
    { path: 'white-space', name: 'White-space', component: WhiteSpace },
  ];

  return (<div className="App">
      <BrowserRouter>
        <AppBar position={'static'}>
          <TopBar>
            <Link to="/">CSS 101</Link>
          </TopBar>
        </AppBar>
        <div style={{ height: '30px' }}/>
        <Route path="/" exact render={() => <List list={list}/>}/>
        {list.map(item =>
          <Route key={item.path} path={`/${item.path}`} component={item.component}/>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
