import profileData from "@/data/profile.json";

const iconBaseUrl = profileData.personal.icon_base_url;

export const techIcons: Record<string, string> = {
  "React.js": "react.svg",
  "React JS": "react.svg",
  "Next.js": "next.svg",
  "Vue.js": "vue.svg",
  "Nuxt.js": "nuxt.svg",
  "TypeScript": "javascript.svg", // Fallback
  "JavaScript": "javascript.svg",
  "Tailwind CSS": "css-3.svg", // Fallback
  "TailwindCSS": "css-3.svg", // Fallback
  "Node.js": "nodejs-icon-alt.svg",
  "Express JS": "nodejs-icon-alt.svg", // Fallback
  "GraphQL": "graphql.svg",
  "REST APIs": "rest-api-logo.svg",
  "REST API": "rest-api-logo.svg",
  "MySQL": "mysql-icon.svg",
  "MongoDB": "mongodb-icon.svg",
  "Neo4j": "neo4j.svg",
  "Docker": "docker-icon.svg",
  "Jenkins": "jenkins.svg",
  "GitHub Actions": "github-actions.svg",
  "AWS": "aws.svg",
  "Git": "git-icon.svg",
  "Prisma": "postgresql.svg", // Fallback
  "OpenAI": "google-cloud.svg", // Fallback
  "Socket.io": "rest-api-logo.svg", // Fallback
  "Stripe": "rest-api-logo.svg", // Fallback
  "Razorpay": "rest-api-logo.svg", // Fallback
  "Electron JS": "visual-studio-code.svg", // Fallback
  "Swagger": "rest-api-logo.svg", // Fallback
  "Kubernetes": "kubernetes.svg",
};

export function getTechIcon(tech: string): string | null {
  // Try exact match first
  if (techIcons[tech]) return `${iconBaseUrl}${techIcons[tech]}`;

  // Try case-insensitive and partial matches
  const techLower = tech.toLowerCase();
  for (const [key, value] of Object.entries(techIcons)) {
    if (techLower.includes(key.toLowerCase()) || key.toLowerCase().includes(techLower)) {
      return `${iconBaseUrl}${value}`;
    }
  }

  return null;
}
