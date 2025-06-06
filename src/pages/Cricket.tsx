import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cricket = () => (
  <>
    <Navbar />
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-truf-navy to-truf-cream py-20 text-white overflow-hidden">
      <img src="https://images.unsplash.com/photo-1505843276873-5b0606b15b8d?auto=format&fit=crop&w=1200&q=80" alt="Cricket Hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 container-custom text-center animate__animated animate__fadeInDown">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Cricket at Turf50</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">Professional-grade pitches, bowling machines, and cutting-edge technology for every player.</p>
        <a href="#features" className="inline-block bg-truf-cream text-truf-navy font-bold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:scale-105 transition">Explore Features</a>
      </div>
    </section>
    {/* Features Section */}
    <section id="features" className="relative py-20 bg-truf-lightcream">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-truf-navy to-transparent opacity-10 pointer-events-none" />
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-truf-navy mb-12 animate__animated animate__fadeIn">Technology & Innovation</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-transform animate__animated animate__zoomIn">
            <img src="https://www.hawkeyeinnovations.com/img/solutions/cricket-ball-tracking.jpg" alt="Hawk-Eye Ball Tracking" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-truf-cream" />
            <h3 className="font-bold text-lg mb-2 text-truf-navy">Hawk-Eye Ball Tracking</h3>
            <p className="text-center text-gray-700 mb-2">Real-time ball tracking for precision analysis. Used for LBW decisions and player feedback.</p>
            <video controls className="w-full rounded-lg mt-2">
              <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-transform animate__animated animate__zoomIn animate__delay-1s">
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80" alt="High-Speed Camera" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-truf-cream" />
            <h3 className="font-bold text-lg mb-2 text-truf-navy">High-Speed Cameras</h3>
            <p className="text-center text-gray-700 mb-2">Capture every detail of technique for frame-by-frame analysis and improvement.</p>
            <video controls className="w-full rounded-lg mt-2">
              <source src="https://samplelib.com/mp4/sample-5s.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-transform animate__animated animate__zoomIn animate__delay-2s">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Wearable Sensors" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-truf-cream" />
            <h3 className="font-bold text-lg mb-2 text-truf-navy">Wearable Sensors</h3>
            <p className="text-center text-gray-700 mb-2">Track movement, speed, and biomechanics for injury prevention and performance optimization.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-transform animate__animated animate__zoomIn animate__delay-3s">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Data Dashboard" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-truf-cream" />
            <h3 className="font-bold text-lg mb-2 text-truf-navy">Data Dashboards</h3>
            <p className="text-center text-gray-700 mb-2">Visualize player stats, match analytics, and progress for tailored coaching.</p>
          </div>
        </div>
        {/* Section Divider */}
        <div className="my-16 flex justify-center">
          <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-truf-navy to-truf-cream opacity-50" />
        </div>
        {/* Call to Action */}
        <div className="text-center animate__animated animate__fadeInUp animate__delay-4s">
          <h3 className="text-2xl font-bold mb-2 text-truf-navy">Ready to Train Like a Pro?</h3>
          <a href="/booking" className="inline-block bg-truf-navy text-truf-cream font-bold px-10 py-4 rounded-full shadow-lg hover:bg-truf-cream hover:text-truf-navy transition">Book Your Cricket Session</a>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Cricket;
