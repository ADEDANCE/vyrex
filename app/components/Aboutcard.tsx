type CardProps = {
  icon?: React.ReactNode;
  image?: React.ReactNode;
  title?: string;
  subtitle: string;
  studentname?: string;
  className?: string;
};
export default function Aboutcard({
  icon,
  title,
  subtitle,
  image,
  studentname,
  className,
}: CardProps) {
  return (
    <div
      className={`w-full shadow rounded-2xl border border-gray-200 bg-white py-4 px-4  flex flex-col  
      ${className}
    `}
    >
      {icon && (
        <div className=" bg-linear-to-bl from-blue-500 to-blue-300 flex items-center justify-center rounded-xl py-2 w-10 h-10 px-2">
          {icon}
        </div>
      )}
      <h2 className=" text-black text-xl font-bold ">{title}</h2>
      <p>{subtitle}</p>
      {image && (
        <div className=" flex gap-4 items-center mt-3">
          {image}
          <p className=" font-bold">{studentname}</p>
        </div>
      )}
    </div>
  );
}
