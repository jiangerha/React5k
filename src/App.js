/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-19 22:28:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {LocaleProvider} from 'antd-mobile'
// import {HashRouter} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Routes from './routes'
import '@/common/styles/common.scss'

class App extends Component {
  render() {
    return (
      <LocaleProvider>
        {/* <HashRouter>
          <Routes></Routes>
        </HashRouter> */}
          <Router>
            <Routes></Routes>
          </Router>
      </LocaleProvider>
    );
  }
}

export default connect()(App);
