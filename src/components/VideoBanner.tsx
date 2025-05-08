const VideoBanner = () => (
  <div className="w-full h-[340px] md:h-[480px] overflow-hidden relative flex items-center justify-center bg-black">
    <video
      className="w-full h-full object-cover"
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      autoPlay
      loop
      muted
      playsInline
      poster="/lovable-uploads/42b39e49-5acc-489e-a23c-649320085192.png"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Welcome to TURF50 Delta Pride</h1>
      <p className="text-lg md:text-2xl text-white drop-shadow">Experience Sports, Technology, and Community</p>
    </div>
  </div>
);

export default VideoBanner;
