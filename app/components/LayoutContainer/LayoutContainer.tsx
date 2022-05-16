const LayoutContainer = ({ children, image }: any) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center w-screen h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
