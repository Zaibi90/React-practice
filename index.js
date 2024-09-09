import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import './index.css';
import Sender from
 './Exporter.js';
import Bicycle from './Classexport';
import MyCar from './Car.js';
import './sassstyle.scss';
import {createContext, useContext} from "react";
import {useRef} from "react";
import Todos from "./Todos.js";
import {useCallback} from "react";
import {useMemo} from "react";
import useFetch from "./useFetch.js";









const fruits=["apple", "banana","mango"];
const flist=fruits.map((items)=>
	<p>{items}</p>);
const div1= ReactDOM.createRoot(document.getElementById('div1')); 
div1.render(flist);

const div2=ReactDOM.createRoot(document.getElementById('div2'));
div2.render(<p>hello</p>);

const mytable=(
	<table>
	<thead>
	<tr>
	<td>sdf</td>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td>gjghj</td>
	</tr>
	<tr>
	<td>yrty</td>
	</tr>
	</tbody>
	</table>
	);
const div3=ReactDOM.createRoot(document.getElementById('div3'));
div3.render(mytable);

const para1=React.createElement("p",{},"hello world");
const jsxdemo1=ReactDOM.createRoot(document.getElementById("jsxdemo1"));
jsxdemo1.render(para1);

const jsxdemo2=ReactDOM.createRoot(document.getElementById("jsxdemo2"));
jsxdemo2.render(<p>hello world</p>);

const jsxdemo3=ReactDOM.createRoot(document.getElementById("jsxdemo3"));
jsxdemo3.render(<p>react is {5+5} times quicker</p>);

const ul1=(
		<ul>
		<li>dgg</li>
		<li>drt</li>
		<li>uyr</li>
		</ul>
);
const jsxdemo4=ReactDOM.createRoot(document.getElementById("div4"));
jsxdemo4.render(ul1);

const twoele=(
	<div>
	<p>i am a para</p>
	<p>i am also a para</p>
	</div>
);
const div5=ReactDOM.createRoot(document.getElementById("div5"));
div5.render(twoele);

const fraguse=(
	<>
	<p>i am a para</p>
	<p>i am a para too</p>
	</>
);
const div6=ReactDOM.createRoot(document.getElementById("div6"));
	div6.render(fraguse);

const inp1=<input type="text" />;
const div7=ReactDOM.createRoot(document.getElementById("div7"));
div7.render(inp1);

const myele2=<p className="h1class">Hello world</p>;
const div8=ReactDOM.createRoot(document.getElementById("div8"));
	div8.render(myele2);

var x=4;
var text="hello";
if(x>5){
	text="goodbye"
}
const myele3=<p>{text}</p>;
const div9=ReactDOM.createRoot(document.getElementById("div9"));
div9.render(myele3);

const myele4=
<p>{(x>5)?"goodbye":"hello"}</p>;
const div10=ReactDOM.createRoot(document.getElementById("div10"));
div10.render(myele4);


class Hy extends React.Component{
	render(){
	return <p>hy to all</p>
	}

}
const div11=ReactDOM.createRoot(document.getElementById("div11"));
div11.render(<Hy/>);


function Hello(){
	return <p>hello all!
			</p>
}
const div12=ReactDOM.createRoot(document.getElementById("div12"));
div12.render(<Hello/>);


function Hello1(props){
	return <p>Hello {props.region} {props.lang}</p>
}
const div13=ReactDOM.createRoot(document.getElementById("div13"));
div13.render(<Hello1 region="Asia" lang="en"/>);


function Car(){
	return <p>I am a car
		</p>
}
function Garage(){
	return (
		<>
		<p>Who is in my garage</p>
		<Car/>
		</>);

}
const div14=ReactDOM.createRoot(document.getElementById("div14"));
div14.render(<Garage/>);



const div15=ReactDOM.createRoot(document.getElementById("div15"));
div15.render(<Sender/>);


class Bike extends React.Component{
	constructor(props){
		super(props);
		this.state={color:"blue"};
		this.state={size:"medium"};
	}
	render(){
	return <p>I have a {this.state.size} {this.props.body} bike</p>
	}
}
const div16=ReactDOM.createRoot(document.getElementById("div16"));
div16.render(<Bike body="metal"/>); 

const div17=ReactDOM.createRoot(document.getElementById("div17"));
div17.render(<Bicycle/>);


class Car1 extends React.
Component{
	constructor(props){
		super(props);
this.state={color:'red'};
	}
Ccl=()=>{
	this.setState({color:"blue"});
	}
	render(){
		return(
		<>
		 <p>I have a {this.state.color} Car</p>
<button onClick={this.Ccl}
>change</button>
		 </>
		 );
	}
}

const div18=ReactDOM.createRoot(document.getElementById("div18"));
div18.render(<Car1 />);


class Car2 extends React.Component{
	constructor(props){
		super(props);
		this.state={fvrtcolor:"green"};
	}
	render(){
	return <p>i have a {this.state.fvrtcolor} Car
		</p>
	}
}
const div19=ReactDOM.createRoot(document.getElementById("div19"));
div19.render(<Car2 />);


class Car3 extends React.Component{
	constructor(props){
		super(props);
		this.state={favoritecolor:"green"};
			}
	static getDerivedStateFromProps(props,state){
	return {favoritecolor:
		props.favcol};
	}
	render(){
		return <p>A {this.state.favoritecolor} Car</p>
			}
}
const div20=ReactDOM.createRoot(document.getElementById("div20"));
div20.render(<Car3 favcol="yellow"/>);


const div21=ReactDOM.createRoot(document.getElementById("div21"));
div21.render(<p>used in all functions</p>);


class Car4 extends React.Component{
	constructor(props){
	super(props);
	this.state={color:"green"};
	}
	componentDidMount(){
	setTimeout(()=>{
		this.setState({color:"yellow"});
		},6000)
	}
	render(){
		return <p>This is a {this.state.color} car</p>
	}
}
const div22
=ReactDOM.createRoot(document.getElementById("div22"));
div22.render(<Car4 />);


class Car5 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			color:"red"
		};
	}

	static getDerivedStateFromProps(props,state){
	return {color:props.fvclr};
	}
	chclr=()=>{
		this.setState({
			color:"green"
		});
	}
	render(){
	return(
		<div>
		<p>I have a {this.state.color} car</p>
		<button onClick={this.chclr}>change
		</button>
		</div>);
	}
}
const div23=ReactDOM.createRoot(document.getElementById("div23"));
div23.render(<Car5 fvclr="yellow"/>);


class Car6 extends React.Component{
	constructor(props){
		super(props);
		this.state={color:"red"};
				}
	shouldComponentUpdate(){
		return false;
		/*the component will not be updated*/
		}
	Ccl2=()=>{
		this.setState({
			color:"green"
		});
			}
	render(){
	return (
	<>
	<p>I have a {this.state.color} Car</p>
	<button onClick={this.Ccl2}>change</button>
	</>
	);
			}
}
const div24=ReactDOM.createRoot(document.getElementById("div24"));
div24.render(<Car6 />);


const div25=ReactDOM.createRoot(document.getElementById("div25"));
div25.render(<p>used in all components</p>);


class Car7 extends React.Component{
	constructor(props){
		super(props);
		this.state={color:"green"};
	}
	componentDidMount(){
		setTimeout(()=>{
		this.setState({color:"blue"});
		},6000);
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		document.getElementById("div27").innerHTML="initial color was "+prevState.color;
		}
	componentDidUpdate(){
		document.getElementById("div28").innerHTML="updated state is "+ this.state.color;
	}
	render(){
	return(
	<>
	<p>I have a {this.state.color} car</p>
	<div id="div27"></div>
	<div id="div28"></div>
	</>
	);
	}
}	
const div26=ReactDOM.createRoot(document.getElementById("div26"));
div26.render(<Car7 />);


class Car8 extends React.Component{
	constructor(props){
		super(props);
		this.state={color:"green"};
	}
	componentDidMount(){
	setTimeout(()=>{
		this.setState({
		color:"red"
		});
	},3000);
	}
	componentDidUpdate(){
	document.getElementById("div30").innerHTML="updated color is "+this.state.color;
	}
	render(){
	return(
	<>
	<p>I have a {this.state.color} car</p>
	<div id="div30"></div>
	</>
	);
	}
}
const div29=ReactDOM.createRoot(document.getElementById("div29"));
div29.render(<Car8 />);


class Container extends React.Component{
	constructor(props){
		super(props);
		this.state={show:true};
	}
	del=()=>{
		this.setState({show:false});
	}
	render(){
	let mypara;
	if(this.state.show){
		mypara=<Child />;
	};
	return (
		<>
		{mypara}
		<button onClick={this.del}>delete
		</button>
		</>
		);
	}
}
class Child extends React.Component{
	componentWillUnmount(){
	alert("the para is about to be unmounted");
	}
	render(){
	return(<p>hello</p>);
	}
}
const div31=ReactDOM.createRoot(document.getElementById("div31"));
div31.render(<Container />);


function Car9(props){
	return(<p>I have a {props.color} car</p>);
}
const myele5=<Car9 color="green" />;
const div32=ReactDOM.createRoot(document.getElementById("div32"));
div32.render(myele5);


function Garage1(){
	return(
		<>
		<p>who is in the garage</p>
	<Car9 color="blue" />
		</>
		);
}
const myele6=<Garage1 />;
const div33=ReactDOM.createRoot(document.getElementById("div33"));
div33.render(myele6);


function Car10(props){
	return(
		<p>i am a {props.brand}!</p>
		);
}
function Garage2(){
	let carName="ford";
	return(
	<>
	<p>who is it?</p>
	<Car10 brand={carName} />
	</>
	);
}
const myele7=<Garage2 />;
const div34=ReactDOM.createRoot(document.getElementById("div34"));
div34.render(myele7);


function Car11(props){
	return(
		<p>i am a {props.brand}!</p>
		);
}
function Garage3(){
	let carInfo={
		make:"ford",
		modal:2000
	};
	return(
	<>
	<p>who is it?</p>
	<Car10 brand={carInfo.make} />
	</>
	);
}
const myele8=<Garage3 />;
const div35=ReactDOM.createRoot(document.getElementById("div35"));
div35.render(myele8);


function Football(){
	const shoot=()=>{
		alert("good shot");
	}
	return(<button onClick={shoot}>Shoot</button>);
}
const div36=ReactDOM.createRoot(document.getElementById("div36"));
div36.render(<Football />);


function Football1(){
	const shoot1=(a)=>{
		alert(a);
	}
	return(
	<button onClick={()=>{shoot1("goal")}}>Shoot</button>
	);
}
const div37=ReactDOM.createRoot(document.getElementById("div37"));
div37.render(<Football1/>);


function Football2(){
	const shoot2=(a,b)=>{
		alert(b.type);
	}
	return(
	<button onClick={(event)=>{
	
		shoot2("goal",event)
	}}>shoot</button>
	);
}
const div38=ReactDOM.createRoot(document.getElementById("div38"));
div38.render(<Football2 />);



function Madegoal(){
	return(<p>scored goal</p>);
}
function Missedgoal(){
	return(<p>missed goal</p>);
}
function Goal(props){
	let isGoal=props.isGoal;
	if(isGoal){
		return(<Madegoal />);
	}
	{
		return(<Missedgoal/>);
	}
}
const div39=ReactDOM.createRoot(document.getElementById("div39"));
div39.render(<Goal isGoal={false}/>);


function Garage4(props){
	let gcars=props.cars;
	return(
	<>
	{
		gcars.length>0 &&<p>you have {gcars.length} cars in your garage</p>
	}
	</>);
}
const cars=["bmw","audi","porshe"];
const div40=ReactDOM.createRoot(document.getElementById("div40"));
div40.render(<Garage4 cars={cars}/>);


function MadeGoal2(){
	return(<p>scored goal</p>);
}
function MissedGoal2(){
	return(<p>Missed Goal</p>);
}

function Goal2(props){
	let isGoal2=props.isGoal;
	return(
	<>
	{isGoal2?<MadeGoal2/>:<MissedGoal2/>}
	</>
	);
}
const div41=ReactDOM.createRoot(document.getElementById("div41"));
div41.render(<Goal2 isGoal={true}/>);


function Car12(props) {
  return <li>I am a { props.brand }</li>;
}
function Garage5(){
	const cars=['ford','bmw','porshe'];
	return(
		<>
		<p>who is it</p>
		<ul>
{cars.map((x)=><Car12 brand={x} />)}
		</ul>
		</>);
}

const div42=ReactDOM.createRoot(document.getElementById("div42"));
div42.render(<Garage5/>);


function Car13(props){
	return(<li>{props.brand}</li>);
}
function Garage6(){
	const cars=[
	{id:1,brand:"ford"},
	{id:2,brand:"bmw"},
	{id:3,brand:"porshe"}
	];
	return(
	<>
	<p>who is it</p>
	<ul>
	{cars.map((car)=><Car13 key={car.id} brand={car.brand}/>)
	}
	</ul>
	</>);
}
const div43=ReactDOM.createRoot(document.getElementById("div43"));
div43.render(<Garage6 />);


function Form1(){
	return(
	<form>
	<label>Enter your name</label>           
	<input type="text" />
	</form>);
}
const div44=ReactDOM.createRoot(document.getElementById("div44"));
div44.render(<Form1 />);


function Form2(){
	const [name, setName] = useState("");
	return(
	<form>
	<label>enter name</label>
	<input type="text" value={name} onChange={(event)=>
		setName(event.target.value)} />
	
	</form>
	); 
}
const div45=ReactDOM.createRoot(document.getElementById("div45"));
div45.render(<Form2 />);


function Form3() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const div46 = ReactDOM.createRoot(document.getElementById('div46'));
div46.render(<Form3 />);


function Form4(){
	const[inputs, setInputs]=useState('');
	const handleSubmit=(event)=>{
		event.preventDefault();
		console.log(inputs);
	}
	const handleChange=(event)=>{
	const name=event.target.name;
	const value=event.target.value;
	setInputs(values=>({...values, [name]:value}))
	}
	return(
	<form onSubmit={handleSubmit}>
	<label>enter name</label>
	<input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/><br/>
	<label>enter age</label>
	<input type="text" name="age" value={inputs.age || ""} onChange={handleChange}/><br/>
	<input type="submit"/>
	</form>
	);
}
const div47=ReactDOM.createRoot(document.getElementById("div47"));
div47.render(<Form4 />);


function Form5(){
	const[textarea,setTextarea]=useState("content goes into value attribute");
	const handleChange=(event)=>{
		setTextarea(event.target.value)
	}
	return(
	<form>
	<textarea
	value={textarea}
	onChange={handleChange}/>
	</form>
	);
}
const div48=ReactDOM.createRoot(document.getElementById("div48"));
div48.render(<Form5 />);


function Form6(){
	const [myCar,setMycar]=useState("bmw");
	const handleChange=(event)=>{
		setMycar(event.target.value)
	}
	return(
	<form>
	<select value={myCar} onChange={handleChange}>
	<option value="bmw">bmw</option>
	<option value="ford">Ford</option>
	<option value="fiat">fiat</option>
	<option value="volvo">volvo</option>
	</select>
	</form>
	);
}
const div49=ReactDOM.createRoot(document.getElementById("div49"));
div49.render(<Form6 />);



export default function App2() {
	return(

	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
         <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} 
          />
      </Routes>
    </BrowserRouter>
    )
}
const div50=ReactDOM.createRoot(document.getElementById("div50"));
div50.render(<App2 />);


const Styling1=()=>{
	return(
	<p style={{color:"red"}}>Hello styling</p>);
}
const div51=ReactDOM.createRoot(document.getElementById("div51"));
div51.render(<Styling1 />);


const Styling2=()=>{
	return(
	<p style={{backgroundColor:"green"}}>hello</p>);
}
const div52=ReactDOM.createRoot(document.getElementById("div52"));
div52.render(<Styling2 />);


const Styling3=()=>{
	const style1={
		color:"white",
		backgroundColor:"green"
	};
	return(
	<p style={style1}>hello</p>);
}
const div53=ReactDOM.createRoot(document.getElementById("div53"));
div53.render(<Styling3 />);


const Styling4=()=>{
	return(
	<p id="exp">This line's styling is done by external stylesheet</p>)
	;
}
const div54=ReactDOM.createRoot(document.getElementById("div54"));
div54.render(<Styling4 />);


const div55=ReactDOM.createRoot(document.getElementById("div55"));
div55.render(<MyCar />);


const div56=ReactDOM.createRoot(document.getElementById("div56"));
div56.render(<p id="para2">hello</p>);


function Fvrtclr(){
	const [color,setColor]=useState("red");
	return(
	<>
	<p>my fvrt color is {color}</p>
	<button onClick={
		()=>setColor("green")}>
		change</button>
	</>
	);
}
const div57=ReactDOM.createRoot(document.getElementById("div57"));
div57.render(<Fvrtclr/>);


function Mycar2(){
	const [brand,setBrand]=useState("ford");
	const [modal,setModal]=useState("1994");
	const [color,setColor]=useState("black");
	return(
	<p>i have a {color} {modal} {brand} car</p>);
}
const div58=ReactDOM.createRoot(document.getElementById("div58"));
div58.render(<Mycar2 />);


function Mycar3(){
	const [car,setCar]=useState({
		brand:"ford",
		modal:"2000",
		color:"black"
	});
	return(
	<p>I have a {car.color} {car.brand} from {car.modal}</p>
	);
}
const div59=ReactDOM.createRoot(document.getElementById("div59"));
div59.render(<Mycar3 />);


function Mycar4(){
	const [car,setCar]=useState({
		brand:"ford",
		modal:"2000",
		color:"black"
	});
const updatecolor=()=>{
	setCar(
	previousState=>{
		return {...previousState, brand:"honda"}
	});
	}
	return(
	<>
	<p>I have a {car.color} {car.modal} {car.brand} car</p>
	<button onClick={updatecolor}>change
	</button>
	</>
	);
}
const div60=ReactDOM.createRoot(document.getElementById("div60"));
div60.render(<Mycar4 />);


function Timer(){
	const [count,setCount]=useState(0);
	useEffect(()=>{
	setTimeout(()=>{
	setCount((count)=>count+1)},1000)});
	return(
	<p>i have rendered {count} times</p>);
}
const div61=ReactDOM.createRoot(document.getElementById("div61"));
div61.render(<Timer/>);


function Timer2(){
	const [count, setCount]=useState(0);
	useEffect(()=>{
		setTimeout(()=>{
			setCount((count)=>count+1)
		},1000)
	},[]);
	return(
	<p>i have rendered {count} times</p>
	);
}
const div62=ReactDOM.createRoot(document.getElementById("div62"));
div62.render(<Timer2 />);


function Timer3(){
	const [count, setCount]=useState(0);
	const [calc,setCalc]=useState(0);
	useEffect(()=>{
		setCalc(()=>count*2)
	},[count]);
	return(
	<>
	<p>Count: {count}</p>
	<p>Calc: {calc}</p>
	<button onClick={()=>setCount((count)=>count+1)}>change</button>
	</>
	);
}
const div63=ReactDOM.createRoot(document.getElementById("div63"));
div63.render(<Timer3/>);


function Timer4(){
	const [count,setCount]=useState(0);
	useEffect(()=>{
		let timer=setTimeout(()=>{
			setCount((c)=>count+1);
		},1000);
	return ()=>clearTimeout(timer)
	} 
	,[]);
	return(
	<p>i have rendered {count} times</p>
	);
}
const div64=ReactDOM.createRoot(document.getElementById("div64"));
div64.render(<Timer4 />);


function Component1(){
	const [user, setUser]=useState("John");
	return(
	<>
	<p>{`hello ${user}!`}</p>
	<Component2 user={user}/>
	</>
	);
}
function Component2({user}){
	return(
	<>
	<p>component 2</p>
	<Component3 user={user}/>
	</>
	);
}
function Component3({user}){
	return(
	<>
	<p>component 3</p>
	<Component4 user={user}/>
	</>
	);
}
function Component4({user}){
	return(
	<>
	<p>component 4</p>
	<Component5 user={user}/>
	</>
	);
}
function Component5({user}){
	return(
<p>{`hello ${user} again`}</p>
	);
}
const div65=ReactDOM.createRoot(document.getElementById("div65"));
div65.render(<Component1 />);



const userContext=createContext();
function Component6(){
	const [user, setUser]=useState("John");
	return(
	<>
	<userContext.Provider value={user}>
	<p>{`hello ${user}!`}</p>
	<Component7/>
	</userContext.Provider>
	</>
	);
}
function Component7(){
	return(
	<>
	<p>component 7</p>
	<Component8 />
	</>
	);
}
function Component8(){
	return(
	<>
	<p>component 8</p>
	<Component9 />
	</>
	);
}
function Component9(){
	return(
	<>
	<p>component 9</p>
	<Component10 />
	</>
	);
}
function Component10(){
	const user=useContext(userContext);
	return(
	<p>{`hello ${user} again`}</p>
	);
}
const div66=ReactDOM.createRoot(document.getElementById("div66"));
div66.render(<Component6 />);



function Reffun(){
	const [input, setInput]=useState("");
	const count=useRef(0);
	useEffect(()=>{
		count.current=count.current+1;
	});
	return(
	<>
	<input 
	type="text"
	value={input}
	onChange={(e)=>setInput(e.target.value)}/>
	<p>Render Count:{count.current}</p>
	</>
	);
}
const div67=ReactDOM.createRoot(document.getElementById("div67"));
div67.render(<Reffun />);


function Reffun2(){
	const inpelement=useRef();
const focusinp=()=>{
		inpelement.current.focus();
	};
	return(
	<>
	<input 
	type="text" ref={inpelement}/>
	<button onClick={focusinp}>focus
	</button>
	</>
	);
}
const div68=ReactDOM.createRoot(document.getElementById("div68"));
div68.render(<Reffun2 />);



function Reffun3(){
	const [input,setInput]=useState();
	const prevInput=useRef("");
	useEffect(()=>{
		prevInput.current=input;
	},[input]);
	return(
	<>
	<input 
	type="text"
	value={input}
	onChange={(e)=>setInput(e.target.value)}/>
	<p>current value: {input}</p>
	<p>previous value: {prevInput.current}</p>
	</>
	);
}
const div69=ReactDOM.createRoot(document.getElementById("div69"));
div69.render(<Reffun3/>);


const div70=ReactDOM.createRoot(document.getElementById("div70"));
div70.render(<p>still to learn</p>);



function Callfun1(){
	const [count,setCount]=useState(0);
	const [todos, setTodos]=useState([]);
	const increment=()=>{
		setCount((c)=>c+1);
	};
	const addTodo=()=>{
		setTodos((t)=>[...t,"new Todo"]);
	};
	return(
	<>
	<Todos todos={todos} addTodo={addTodo}/>
	<hr/>
	<div>
	count: {count}
	<button onClick={increment}>increment</button>
	</div>
	</>
	);
}
const div71=ReactDOM.createRoot(document.getElementById("div71"));
div71.render(<Callfun1/>);


function Callfun2(){
	const [count, setCount]=useState(0);
	const [todos,setTodos]=useState([]);
	const increment=()=>{
		setCount((c)=>c+1);
	}
	const addTodo=useCallback(()=>{
		setTodos((t)=>[...t, "new todo"])
	});
	return(
	<>
	<Todos todos={todos} addtodo={addTodo}/>
	<p>count: {count}</p>
	<button onClick={increment}>increment</button>
	</>
	);
}
const div72=ReactDOM.createRoot(document.getElementById("div72"));
div72.render(<Callfun2/>);


function Memo1(){
	const [count, setCount]=useState(0);
	const [todos,setTodos]=useState([]);
	const calculation=expcalc(count);
	const increment=()=>{
		setCount((c)=>c+1);
	}
	const addTodo=()=>{
		setTodos((t)=>[...t, "new Todo"]);
	}
	return(
	<>
	{todos.map((todo,index)=>{
		return <p key={index}>{todo}</p>
	})}
	<button onClick={addTodo}>add</button>
	<hr/>
	<p>count: {count}</p>
	<button onClick={increment}>increment</button>
	<p>calculation: {calculation}</p>
	</>
	);
	function expcalc(num){
		for(let i=0;i<1000000000;i++){
			num+=1;
		}
	return(num);
	}
}
const div73=ReactDOM.createRoot(document.getElementById("div73"));
div73.render(<Memo1/>);


function Memo2(){
	const [count,setCount]=useState(0);
	const [todos,setTodos]=useState([]);
	const calculation=useMemo(()=>expcalc(count), [count]);
	const increment=()=>{
		setCount((c)=>c+1);
	}
	const addTodo=()=>{
		setTodos((t)=>[...t,"new todo"]);
	}
	return(
	<>
	<p>my todos</p>
	{todos.map((todo,index)=>{
		return <p key={index}>{todo}</p>
	})}
	<button onClick={addTodo}>add</button>
	<p>count: {count}</p>
	<p>calculation: {calculation}</p>
	<button onClick={increment}>increment</button>
	</>
	);
	function expcalc(num){
		for(let i=0;i<1000000000;i++){
			num+=1;
		}
		return num;
	}

}
const div74=ReactDOM.createRoot(document.getElementById("div74"));
div74.render(<Memo2/>);


const Hook1=()=>{
	const [data,setData]=useState(null);
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/todos")
		.then((res)=>res.json())
		.then((data)=>setData(data))
	},[]);
	return(
	<>
	{data && data.map((item)=>{
		return <p key={item.id}>{item.title}</p>
	})}
	</>
	);
}
const div75=ReactDOM.createRoot(document.getElementById("div75"));
div75.render(<Hook1/>);



const Custom2=()=>{
	const [data]=useFetch("https://jsonplaceholder.typicode.com/todos");
	return(
	<>
	{data && data.map((item)=>{
		return <p key={item.id}>{item.title}</p>;
	})}
	</>
	);
}
const div76=ReactDOM.createRoot(document.getElementById("div76"));
div76.render(<Custom2 />);
















