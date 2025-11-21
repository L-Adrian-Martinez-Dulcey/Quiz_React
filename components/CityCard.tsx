export default function CityCard({ name, image, href }: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        group block overflow-hidden rounded-2xl 
        border border-blue-200 
        bg-white shadow-md 
        hover:shadow-xl hover:border-blue-400
        transition-all duration-300
      "
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="
            h-48 w-full object-cover 
            transition-transform duration-500 
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-blue-700">
          {name}
        </h3>
      </div>
    </a>
  );
}
