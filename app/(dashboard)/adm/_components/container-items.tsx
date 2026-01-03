
type ContainerItemsProps = {
    data : {
        name : string;
        value : string | number ;
    }[]
}

export function ContainerItems( {data } : ContainerItemsProps) {
  return (
    <div className=" flex  flex-col p-4 text-secondary text-xl font-normal  ">
      <ul className="flex flex-col  max-sm:items-center gap-4 w-full flex-1 p-4 max-sm:p-1">
         {data.map((item,index)=>{
          return(
            <li className=" " key={index}>{item.name} : {item.value}</li>
          )
         })} 
      </ul>
    </div>
  );
}
