//一级路由
import Index from './components/Index';
import Newer from './components/Newer';
import Api from './components/Api';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Details from './components/Details';



export const routes=[
{path:'/',name:'Indexlink',components:{content:Index,side:Sidebar}}, 
{path:'/newer',name:'Newerlink',components:{content:Newer,side:Sidebar}},
{path:'/api',name:'Apilink',components:{content:Api}},
{path:'/about',name:'Aboutlink',components:{content:About,side:Sidebar}},
{path:'/register',name:'Registerlink',components:{content:Register}},
{path:'/login',name:'Loginlink',components:{content:Login}},
{path:'/topic/:id',name:'Detailslink',components:{topic:Details,side:Sidebar}}
]