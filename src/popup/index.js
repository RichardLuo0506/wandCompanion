/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import * as browser from 'webextension-polyfill';
import './index.css';
import Popup from '../components/Popup/Popup';

browser.runtime.sendMessage({ data: 'hello' });

var a = b

ReactDOM.render(
  <Popup text="Ext boilerplate" />,
  document.getElementById('root')
);
