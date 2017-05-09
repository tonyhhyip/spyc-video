import { load } from 'js-yaml';
import store from '../store';

/* globals fetch */

const URL = `${process.env.NODE_ENV === 'production' ? '/video' : ''}/static/video.yml`;

export default function (to, from, next) {
  return fetch(URL)
    .then(response => response.text())
    .then(content => load(content))
    .then(data => store.commit('importVideo', data))
    .then(next);
}
