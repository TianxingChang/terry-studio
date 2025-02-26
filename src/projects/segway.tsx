const page = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center  items-center px-4">
      <div className="w-full text-xl text-center font-bold">Not a segway</div>
      <div className="font-[family-name:var(--font-geist-mono)] mb-4">
        A three-wheel segway.
      </div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/jn_TOyOZnyg`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="rounded-lg"
      />
    </div>
  );
};

export default page;
