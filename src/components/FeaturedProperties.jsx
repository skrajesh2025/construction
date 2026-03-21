import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50 relative">

      {/* Subtle Background Image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/images/indian-family-home.jpg"
          alt="Indian middle class family at home"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Homes for Every Indian Family
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Affordable, verified homes designed for comfort, safety, and a better future for your family.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties?.length > 0 ? (
            properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No properties available right now. Please check back later.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
            Explore More Homes
          </button>
        </div>

      </div>
    </section>
  );
}