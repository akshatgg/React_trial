
let namec=document.querySelector("#namec");
function Content() {
    const handle = () =>{
        const name=['bob','ben','tom'];

        
       return name[0];
        
    }
    const handleclick=()=>{
console.log("clicked it");

    }
    const handleclsik2=()=>{
      
      const name=['bob','ben','tom'];

      const int= Math.floor(Math.random()*3);
return namec.innerHTML= name[int];
    }
  return (
    <div>
        <p> hello <span id="namec">{handle()}</span></p>
        <div>
         <button  onClick={handleclick} className="bg-gray-400 hover:bg-gray-500 mb-4 rounded-xl pl-5 pr-5" >clickit</button>
         </div>
         <button onClick={handleclsik2} className="bg-gray-400 hover:bg-gray-500 rounded-xl pl-9 pr-9">Click to change name</button>
    </div>
  )
}

export default Content