document.write('hello webpack');

import avatar from './avatar.png';

const img = new Image();

img.src = avatar;

document.getElementById('root').append(img);