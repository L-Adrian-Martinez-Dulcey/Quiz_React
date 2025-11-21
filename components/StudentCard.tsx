export default function StudentCard({ name, program, image }: {
  name: string;
  program: string;
  image: string;
}) {
  return (
    <div className="p-4 border rounded-lg shadow-md flex gap-4 items-center">
      <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{program}</p>
      </div>
    </div>
  );
}
