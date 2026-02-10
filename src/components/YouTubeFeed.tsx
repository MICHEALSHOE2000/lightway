import { Youtube, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const videos = [
  {
    id: "9uws_QMkQUQ", 
    title: "Naples Arepo Development - Premium Real Estate",
  },
  {
    id: "GvULfaw64hE", 
    title: "The Novara Courts Project Showcase",
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
              <div className="bg-[#121212] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/20 border border-white/5 group">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-none"
                  ></iframe>
                </div>
                <div className="p-4 md:p-6 bg-gradient-to-b from-[#1a1a1a] to-black">
                   <div className="flex flex-col gap-4">
                     <div className="flex items-start gap-3">
                       <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 border border-red-600/20">
                          <Youtube className="w-5 h-5 text-red-600" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="text-white text-base md:text-lg font-bold leading-tight line-clamp-2">
                           {video.title}
                         </h3>
                         <p className="text-white/40 text-xs mt-1 font-medium uppercase tracking-wider">Official Update</p>
                       </div>
                     </div>
                     
                     <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:border-white/20 text-sm font-semibold transition-all group/btn" asChild>
                       <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                         Watch on YouTube
                         <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                       </a>
                     </Button>
                   </div>
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
