
import { Navigation } from "./navigation";
import { Repo } from "../_components/navigation";

export async function Menu(){
    
  const data: Repo[] = await fetch('http://localhost:3000/api/github',{ cache:'no-store'}).then(response => response.json())
     
  return(

    <Navigation data={data}   />
  )

    

}