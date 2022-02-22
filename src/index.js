document.write('hello webpack');

import avatar from './avatar.png';
import './index.css'
import './index.less'

const img = new Image();

img.src = avatar;

document.getElementById('root').append(img);