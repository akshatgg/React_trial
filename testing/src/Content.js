

function Content() {
    const handle = () =>{
        const name=['bob','ben','tom'];
        
       return name.map((x)=>(
        <div key={x}>
            {x}
            </div>   
       ))
    }
  return (
    <div>
         hello{handle()}

    </div>
  )
}

export default Content