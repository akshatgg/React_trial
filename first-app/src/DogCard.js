import Image from "./Image";
// function Image(){
//     return <img src="https://media.istockphoto.com/id/513133900/photo/golden-retriever-sitting-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=rPuBgfn_wcAzaa8o2GhrA2eBTdbvrTvYw4demzV-bOs="/>;

// }
function DogCard(props){
    return(
<>
    <h3>{props.name}</h3>
    <Image src={props.Image} />
    
</>
    );
}

export default DogCard;
