/**
Copyright 2019 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import App from './modules/main.js'
import './scss/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  new App()
  // Init Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyDdp3n2WWgj-nt-pXv1wQ4n3uh6sm5gf1s',
    authDomain: 'newsroom-tts.firebaseapp.com',
    databaseURL: 'https://newsroom-tts.firebaseio.com',
    projectId: 'newsroom-tts',
    storageBucket: 'newsroom-tts.appspot.com',
    messagingSenderId: '346173130872',
    appId: '1:346173130872:web:ae2b7fa84db720c940c58d',
  }

  // Initialize Firebase
  // eslint-disable-next-line
  firebase.initializeApp(firebaseConfig)
})
