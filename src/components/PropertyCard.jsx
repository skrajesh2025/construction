import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function PropertyCard({property}){

return(

<motion.div
whileHover={{scale:1.03}}
className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
>

<img
src={property.image}
className="w-full h-52 object-cover"
/>

<div className="p-4">

<h3 className="text-xl font-semibold">{property.title}</h3>

<p className="text-gray-500">{property.location}</p>

<p className="text-lg font-bold mt-2">{property.price}</p>

<div className="flex justify-between text-sm mt-2">

<span>{property.bedrooms} Beds</span>
<span>{property.bathrooms} Baths</span>
<span>{property.area}</span>

</div>

<Link
to={`/property/${property.id}`}
className="block mt-4 bg-primary text-white text-center py-2 rounded-lg"
>
View Details
</Link>

</div>

</motion.div>

)
}