import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

window.addEventListener('popstate', function (event) {
  let name = event.target.location.pathname.substring(1);
  if(name == ''){
    name = "home";
  } 
  
  document.body.style.backgroundImage = `url('/images/bg_${name}.png')`;
});
