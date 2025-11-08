/**
 * Auto-generates project content based on metadata
 * Produces conservative, editable copy without inventing metrics
 */

export interface ProjectMetadata {
  title: string;
  description: string;
  client?: string;
  role?: string;
  category?: string;
  deliverables?: string[];
  startDate?: string;
  endDate?: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  gallery?: string[];
}

export interface GeneratedContent {
  intro: string;
  overview: string;
  execution: string;
  results: string;
  galleryCaptions: string[];
}

export function generateProjectContent(metadata: ProjectMetadata): GeneratedContent {
  const { title, description, technologies, metrics, gallery, category, deliverables } = metadata;

  // Generate intro paragraph
  const intro = description || `${title} represents a comprehensive digital solution designed to meet modern web standards and deliver exceptional user experiences.`;

  // Generate overview section
  const overview = `
This project was developed with a focus on ${category || 'innovative solutions'} and user-centric design principles. 
The platform leverages ${technologies.slice(0, 3).join(', ')} to create a robust and scalable application.

${deliverables && deliverables.length > 0 
  ? `Key deliverables included ${deliverables.join(', ')}, ensuring a complete and polished final product.`
  : 'The development process prioritized clean code architecture, responsive design, and optimal performance.'
}
  `.trim();

  // Generate execution section
  const execution = `
The development approach emphasized iterative design and agile methodologies. Using ${technologies[0] || 'modern technologies'}, 
the application was built with attention to:

- **User Experience**: Intuitive navigation and responsive layouts across all devices
- **Performance**: Optimized loading times and efficient resource management  
- **Scalability**: Architecture designed to grow with business needs
- **Code Quality**: Clean, maintainable codebase following industry best practices

${technologies.length > 3 
  ? `Additional technologies integrated include ${technologies.slice(3).join(', ')}.`
  : ''
}
  `.trim();

  // Generate results section (conservative - only use metrics if provided)
  const results = metrics && metrics.length > 0
    ? `
The project successfully achieved its objectives with measurable outcomes:

${metrics.map(m => `- **${m.label}**: ${m.value}`).join('\n')}

The solution has been well-received and continues to serve its intended purpose effectively.
    `.trim()
    : `
The project was successfully delivered and launched, meeting all requirements and expectations. 
The platform provides a solid foundation for future enhancements and continues to serve users effectively.
    `.trim();

  // Generate gallery captions
  const galleryCaptions = gallery && gallery.length > 0
    ? gallery.map((_, index) => `Project showcase ${index + 1}`)
    : [];

  return {
    intro,
    overview,
    execution,
    results,
    galleryCaptions
  };
}
