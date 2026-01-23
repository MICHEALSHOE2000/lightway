import { Youtube, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const videos = [
  {
    id: "9uws_QMkQUQ", 
    title: "The Naples Development - Premium Real Estate",
  },
  {
    id: "GvULfaw64hE", 
    title: "Novara Court Project Showcase",
  },
  {
    id: "lGYYn2j5OPw", 
    title: "Real Estate Investment Advice in Nigeria",
  },
  {
    id: "Qa9yCvC-T3Y", 
    title: "Property Value Preservation Strategies",
  },
];

// To display more videos or a specific playlist, you can use the playlist ID:
// const playlistId = "UU_USER_ID_HERE"; // Your 'Uploads' playlist ID

const YouTubeFeed = () => {
  return (
    <section id="channels" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Our Channels
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {videos.map((video, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-none"
                  ></iframe>
                </div>
                <div className="px-4 py-3 bg-black flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                        <Youtube className="w-4 h-4 text-red-600" />
                     </div>
                     <span className="text-white text-sm font-medium truncate max-w-[200px]">{video.title}</span>
                   </div>
                   <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10 text-xs font-bold" asChild>
                     <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                       Watch on YouTube
                     </a>
                   </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300} className="text-center mt-12">
          <Button variant="hero" size="lg" className="rounded-full shadow-lg group" asChild>
            <a href="https://www.youtube.com/@lightwayhomes" target="_blank" rel="noopener noreferrer">
              Subscribe to Our Channel
              <Youtube className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default YouTubeFeed;
