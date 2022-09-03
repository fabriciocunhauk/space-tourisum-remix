const LayoutContainer = ({ children, image, className }: any) => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat flex items-center justify-center w-screen ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
