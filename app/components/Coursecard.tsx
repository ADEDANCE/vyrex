type CourseCardProps = {
  image: string;
  title: string;
  subtitle: string;
  action?: React.ReactNode;
};

export default function CourseCard({
  image,
  title,
  subtitle,
  action,
}: CourseCardProps) {
  return (
    <div className="w-full">
      <img src={image} alt={title} className="rounded-t-2xl" />

      <div className="bg-white rounded-b-2xl px-3 pb-3 space-y-2">
        <h3 className="font-bold">{title}</h3>

        <p className="text-xs text-gray-600">{subtitle}</p>

        {action}
      </div>
    </div>
  );
}
