interface HeadingProps{
  title: string;
  lg?: boolean;
  md?: boolean;
  center?: boolean
}

const Heading = ({title,lg,md,center}:HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      {lg && <h1 className="font-bold text-4xl my-2">{title}</h1>}
      {md && <h2 className="font-bold text-3xl my-2 ">{title}</h2>}
      {!md && !lg && <h3 className="font-bold text-3xl my-2">{ title}</h3>}
      
    </div>
  );
};

export default Heading;