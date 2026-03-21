import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Properties Test
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Explore our handpicked premium properties tailored for modern living.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid 
            gap-6 
            sm:gap-8 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4
          "
        >
          {properties?.length > 0 ? (
            properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No properties available at the moment.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}