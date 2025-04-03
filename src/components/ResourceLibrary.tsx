import { BookOpen, FileText, Video, Code, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ResourceMaterial,RESOURCE_MATERIALS } from "@/data/resourcesData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
type ResourceType = "guide" | "challenge" | "video" | "template";
interface Resource {
  title: string;
  description: string;
  icon: any; // You can make this more specific if needed
  type: ResourceType;
  count: number;
}
const RESOURCES: Resource[] = [
  {
    title: "Interview Guides",
    description: "Comprehensive guides for technical interviews",
    icon: BookOpen,
    type: "guide",
    count: 12,
  },
  {
    title: "Code Challenges",
    description: "Practice coding problems with solutions",
    icon: Code,
    type: "challenge",
    count: 45,
  },
  {
    title: "Video Tutorials",
    description: "Interview preparation videos and tips",
    icon: Video,
    type: "video",
    count: 28,
  },
  {
    title: "Templates",
    description: "Interview scorecards and feedback forms",
    icon: FileText,
    type: "template",
    count: 8,
  },
];
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ResourceLibrary() {
  const [selectedType, setSelectedType] = useState<ResourceType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleResourceClick = (type: ResourceType) => {
    setSelectedType(type);
    setIsDialogOpen(true);
  };
  const getResourceUrl = (item: ResourceMaterial) => {
    switch (item.type) {
      case 'guide':
      case 'template':
        return item.downloadUrl;
      case 'challenge':
        return item.problemUrl;
      case 'video':
        return item.videoUrl;
    }
  };
  return (
    <>
    <motion.div variants={{ fadeIn }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Resource Library
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Access interview materials and preparation resources
          </p>
        </div>
        <button className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-medium flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESOURCES.map((resource) => (
          <motion.div
            key={resource.title}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-violet-100/20 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            onClick={() => handleResourceClick(resource.type)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-violet-600 dark:text-violet-400">
                <resource.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {resource.count} items
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {resource.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {resource.description}
            </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>
          {RESOURCES.find((r) => r.type === selectedType)?.title}
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {selectedType && RESOURCE_MATERIALS[selectedType].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-lg border border-violet-100/20 hover:border-violet-500/30 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                {item.duration && <span>{item.duration}</span>}
                {item.difficulty && (
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    item.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {item.difficulty}
                  </span>
                )}
               {'format' in item && <span>{item.format}</span>}
              </div>
            </div>
            <button
              className="flex items-center gap-1 text-violet-600 hover:text-violet-700 font-medium"
              onClick={() => window.open(getResourceUrl(item), '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Open
            </button>
          </motion.div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
</>
  );
}