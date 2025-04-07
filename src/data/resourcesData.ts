export type ResourceType = "guide" | "challenge" | "video" | "template";
interface GuideResource {
    type: 'guide';
    title: string;
    description: string;
    downloadUrl: string;
    duration: string;
    difficulty:string;
  }
  
  interface ChallengeResource {
    type: 'challenge';
    title: string;
    description: string;
    difficulty: string;
    duration: string;
    language: string;
    problemUrl: string;
  }
  
  interface VideoResource {
    type: 'video';
    title: string;
    description: string;
    duration: string;
    thumbnail: string;
    videoUrl: string;
    difficulty:string;
  }
  
  interface TemplateResource {
    type: 'template';
    title: string;
    description: string;
    downloadUrl: string;
    format: string;
    difficulty:string;
    duration: string;
  }
  export type ResourceMaterial = GuideResource | ChallengeResource | VideoResource | TemplateResource;
  export const RESOURCE_MATERIALS: Record<ResourceType, ResourceMaterial[]> = {
  guide: [
    {
        type: 'guide',
      title: "Technical Interview Preparation",
      description: "A comprehensive guide to ace technical interviews",
      downloadUrl: "https://www.interviewbit.com/python-interview-questions/",
      difficulty: "Beginner",
      duration: "45 mins read",
    },
    {
        type: 'guide',
      title: "Behavioral Questions Guide",
      description: "Common behavioral questions and how to answer them",
      downloadUrl: "https://www.indiabix.com/",
      difficulty: "Intermediate",
      duration: "30 mins read",
    },
    {
        type: 'guide',
      title: "System Design Basics",
      description: "Introduction to system design interviews",
      downloadUrl: "https://www.interviewbit.com/system-design-interview-questions/",
      difficulty: "Advanced",
      duration: "1 hour read",
    },
  ],
  challenge: [
    {
        type: 'challenge',
      title: "Array Manipulation",
      difficulty: "Easy",
      description: "Practice array-based coding problems",
      language: "JavaScript",
       duration: "30 min read",
      problemUrl: "https://leetcode.com/explore/learn/card/array-and-string/",
    },
    {
        type: 'challenge',
      title: "Tree Traversal",
      difficulty: "Medium",
      description: "Binary tree problems and solutions",
       duration: "1 hour read",
      language: "Python",
      problemUrl: "https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/",
    },
    {
        type: 'challenge',
      title: "Dynamic Programming",
      difficulty: "Hard",
      duration: "45 min read",
      description: "Advanced DP problems with explanations",
      language: "Java",
      problemUrl: "https://leetcode.com/problem-list/dynamic-programming/",
    },
  ],
  video: [
    {
      type: 'video',
      title: "Interview Best Practices",
      description: "Essential tips and techniques for successful interviews",
      duration: "15:30",
      difficulty: "Intermediate",
      thumbnail: "/thumbnails/best-practices.jpg",
      videoUrl: "https://www.youtube.com/watch?v=tUigT177XKU",
    },
    {
      type: 'video',
      title: "Live Coding Session",
      description: "Watch and learn from a real coding interview session",
      duration: "45:00",
      thumbnail: "/thumbnails/live-coding.jpg",
      difficulty: "Beginner",
      videoUrl: "https://www.youtube.com/watch?v=H6zlzfdCqf8&ab_channel=CodeBeyond",
    },
    {
      type: 'video',
      title: "System Design Interview",
      description: "Step-by-step guide to system design interviews",
      duration: "60:00",
      thumbnail: "/thumbnails/system-design.jpg",
      difficulty: "Advanced",
      videoUrl: "https://www.youtube.com/c/SystemDesignInterview",
    },
  ],
  template: [
    {
        type: 'template',
      title: "Technical Assessment Form",
      duration: "1 min read",
      description: "Structured evaluation template for technical skills",
      downloadUrl: "/templates/technical-assessment.pdf",
      difficulty: "Beginner",
      format: "PDF",
    },
    {
        type: 'template',
      title: "Feedback Template",
      duration: "10 min read",
      description: "Standardized interview feedback form",
      downloadUrl: "/templates/feedback.docx",
      difficulty: "Intermediate",
      format: "DOCX",
    },
    {
        type: 'template',
      title: "Interview Checklist",
      duration: "5 min read",
      description: "Pre-interview preparation checklist",
      downloadUrl: "/templates/checklist.pdf",
      difficulty: "Advanced",
      format: "PDF",
    },
  ],
};