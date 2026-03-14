import {properties} from "../data/properties"
import PropertyCard from "../components/PropertyCard"

export default function Buy(){
return(
<div className="p-10 grid md:grid-cols-3 gap-6">
{properties.map(p=>(
<PropertyCard key={p.id} property={p}/>
))}
</div>
)
}