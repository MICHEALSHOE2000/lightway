import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, categories } from "@/data/blog";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <PageHero
        title="Our Blog"
        subtitle="Insights & News"
        description="Stay informed with the latest real estate insights, investment tips, and company updates from Light Way Homes."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Category Filter */}
      <section className="py-6 md:py-8 bg-gradient-to-b from-muted/60 to-background border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No posts found
              </h3>
              <p className="text-muted-foreground">
                Check back later for new articles
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <article className="group bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 md:h-52 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover img-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-3 right-3 w-9 h-9 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                          <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-2 pt-4 border-t border-border">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {post.author}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
