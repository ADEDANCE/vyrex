type CourseCardProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  className?: string;
  onClick?: () => void;
};

export default function CourseCard({
  image,
  title,
  subtitle,
  className,
  buttonText = "Buy Now",
  onClick,
}: CourseCardProps) {
  return (
    <div className="w-full">
      <img src={image} alt={title} className="rounded-t-2xl" />

      <div className="bg-white rounded-b-2xl px-3 pb-3 space-y-2">
        <h3 className="font-bold">{title}</h3>

        <p className="text-xs text-gray-600">{subtitle}</p>

        <button
          onClick={onClick}
          className={` px-3 py-1 rounded-lg ${className}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
