import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Briefcase, Package } from "lucide-react";
import { projects } from "@/data/projectsData";
import { generateProjectContent } from "@/lib/generateProjectContent";
import VisitWebsiteButton from "@/components/VisitWebsiteButton";
import OtherProjects from "@/components/OtherProjects";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const content = generateProjectContent(project);

  // SEO
  useEffect(() => {
    document.title = `${project.title} - Ryan Waweru Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description.slice(0, 160));
    }
  }, [project]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                {project.category || "Web Development"}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {content.intro}
            </p>
          </motion.div>

          {/* Top Visit Website Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <VisitWebsiteButton url={project.liveUrl} variant="default" />
          </motion.div>

          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.overview}
                  </p>
                </div>
              </motion.section>

              {/* Execution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Execution</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.execution}
                  </p>
                </div>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Results</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.results}
                  </p>
                </div>
              </motion.section>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 ? (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={image}
                          alt={`${project.title} ${content.galleryCaptions[index] || `screenshot ${index + 1}`}`}
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center py-12 border border-border rounded-xl"
                >
                  <p className="text-muted-foreground italic">
                    No additional images available for this project.
                  </p>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Metadata Card */}
                <div className="card-gradient rounded-2xl p-6 space-y-6">
                  <h3 className="text-xl font-bold">Project Details</h3>

                  {project.client && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  )}

                  {project.role && (
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Role</p>
                        <p className="font-medium">{project.role}</p>
                      </div>
                    </div>
                  )}

                  {project.category && (
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                    </div>
                  )}

                  {project.deliverables && project.deliverables.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Deliverables</p>
                      <div className="space-y-2">
                        {project.deliverables.map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <Icon name="checkmark" className="w-4 h-4 mt-0.5 flex-shrink-0" alt="Completed" />
                            <span className="text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(project.startDate || project.endDate) && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-medium">
                          {project.startDate || "Start"} - {project.endDate || "Present"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="card-gradient rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Visit Website CTA */}
                <div className="card-gradient rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">View Live</h3>
                  <VisitWebsiteButton url={project.liveUrl} variant="sidebar" />
                </div>
              </div>
            </motion.aside>
          </div>
        </div>

        {/* Other Projects */}
        <OtherProjects 
          projects={projects.map(p => ({
            title: p.title,
            slug: p.slug,
            image: p.image,
            category: p.category || "Web Development"
          }))}
          currentSlug={slug || ""}
        />

        {/* Contact CTA */}
        <ContactCTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
