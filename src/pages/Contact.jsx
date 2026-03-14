export default function Contact(){

return(

<div className="container mx-auto py-16">

<h1 className="text-4xl font-bold mb-10">Contact Us</h1>

<form className="grid gap-6 max-w-xl">

<input placeholder="Name" className="p-3 border rounded"/>

<input placeholder="Email" className="p-3 border rounded"/>

<textarea
placeholder="Message"
className="p-3 border rounded"
/>

<button
className="bg-primary text-white py-3 rounded"
>
Send Message
</button>

</form>

</div>

)

}