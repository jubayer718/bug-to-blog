
const AuthLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
     <div>Auth Nav</div>
      { children}
    </div>
  );
};

export default AuthLayout;