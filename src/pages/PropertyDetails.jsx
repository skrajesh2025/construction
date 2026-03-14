import { useParams } from "react-router-dom"
import { properties } from "../data/properties"

export default function PropertyDetails(){

const {id}=useParams()

const property=properties.find(p=>p.id===parseInt(id))

return(

<div className="container mx-auto py-16">

<img
src={property.image}
className="w-full h-96 object-cover rounded-xl"
/>

<h1 className="text-3xl font-bold mt-6">
{property.title}
</h1>

<p className="text-gray-500">{property.location}</p>

<p className="mt-4">{property.description}</p>

<h3 className="mt-6 font-bold text-xl">
Amenities
</h3>

<ul className="list-disc ml-6">

{property.amenities.map(a=>(
<li key={a}>{a}</li>
))}

</ul>

<button
className="mt-6 bg-primary text-white px-6 py-3 rounded"
>
Contact Agent
</button>

</div>

)

}