const Backdrop = ({ className, onClick }) => {
  return (
    <div
      className={` fixed top-0 left-0 w-dvw h-dvh bg-[#000000c5] z-100 ${className}`}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
