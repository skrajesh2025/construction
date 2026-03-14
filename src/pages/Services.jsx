import {services} from "../data/services"
import ServiceCard from "../components/ServiceCard"

export default function Services(){
return(
<div className="p-10 grid md:grid-cols-3 gap-6">
{services.map(s=>(
<ServiceCard key={s.id} service={s}/>
))}
</div>
)
}