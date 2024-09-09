import {memo} from "react";
const Todos=({todos,addtodo})=>{
	console.log("render");
	return(
	<>
	<p>my todos</p>
	{todos.map((todo,index)=>{
		return <p key={index}>{todo}</p>;
	})}
	<button onClick={addtodo}>add</button>
	</>
	);
};
export default memo(Todos);