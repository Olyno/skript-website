import { writable } from 'svelte/store';
import Cookies from 'js-cookie';

export const defaultColors = {
    primaryColor: '#2F4858',
    secondaryColor: '#D6DE79'
}

export const currentColors = writable(Cookies.get('currentColors') ? 
    JSON.parse(Cookies.get('currentColors'))
    : defaultColors
);

currentColors.subscribe(v => Cookies.set('currentColors', JSON.stringify(v)));