import { properties } from "../data/properties"
import PropertyCard from "./PropertyCard"

export default function FeaturedProperties(){

return(

<section className="py-16 container mx-auto">

<h2 className="text-3xl font-bold mb-10 text-center">
Featured Properties
</h2>

<div className="grid gap-8
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4">

{properties.map(p=>(
<PropertyCard key={p.id} property={p}/>
))}

</div>

</section>

)
}