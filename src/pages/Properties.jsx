import { properties } from "../data/properties"
import PropertyCard from "../components/PropertyCard"

export default function Properties(){

return(

<div className="container mx-auto py-16">

<h1 className="text-4xl font-bold mb-10">Properties</h1>

<div className="grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-8">

{properties.map(p=>(
<PropertyCard key={p.id} property={p}/>
))}

</div>

</div>

)

}