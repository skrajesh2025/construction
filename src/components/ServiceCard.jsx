export default function ServiceCard({service}){
return(
<div className="p-6 rounded-xl shadow bg-white hover:shadow-xl transition">
<h3 className="font-bold text-lg">{service.title}</h3>
<p className="text-sm mt-2">{service.desc}</p>
<a href="https://wa.me/919876543210" className="text-green-600 mt-4 inline-block">
Book Service
</a>
</div>
)
}