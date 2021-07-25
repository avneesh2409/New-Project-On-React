import React,{useEffect,useState} from 'react';

const DisplayTodos = () =>{
	const [state,setState] = useState({data:null})
	useEffect(()=>{
		let url = 'https://jsonplaceholder.typicode.com/todos'
			fetch(url)
					  .then(response => response.json())
					  .then(json => setState({
					  	...state,
					  	data:json.slice(10,13)
					  }))
	},[])

	return (
		<div>
			<h1>Displaying all the Todos</h1>
			{
				state.data && state.data.length && state.data.map(e=>{
				let result =  <div class="card">
								  <h5>Id : {e.id}</h5>
								  <h1>{e.title}</h1>
								  <p class="price">UserId : {e.userId}</p>
								  <p><button>{e.completed?"Completed":"Not Completed"}</button></p>
								  
							</div> 
					return result
				})
			}
		</div>
	)
}
export default DisplayTodos;