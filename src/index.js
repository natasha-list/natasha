import styles from '../public/styles.css'
import { App } from './App'
document.addEventListener('DOMContentLoaded',async(e)=> await App())
window.addEventListener('hashchange',async(e)=> await App())