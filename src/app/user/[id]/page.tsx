

const DynamicUser = async({ params }:{params:Promise<{id:string}>}) => {
  const{id}=await params
  return (
    <div>
      User profile {id}
    </div>
  );
};

export default DynamicUser;