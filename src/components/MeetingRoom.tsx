import {
  CallControls,
  CallingState,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutListIcon, LoaderIcon, UsersIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import EndCallButton from "./EndCallButton";
import CodeEditor from "./CodeEditor";

function MeetingRoom() {
  const router = useRouter();
  const [layout, setLayout] = useState<"grid" | "speaker">("speaker");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="h-96 flex items-center justify-center bg-gradient-to-r from-violet-500/10 to-indigo-500/10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <LoaderIcon className="size-8 animate-spin text-violet-600 mb-4" />
          <p className="text-violet-600 font-medium">Joining the meeting...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-[calc(100vh-4rem-1px)]"
  >
      <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={35} minSize={25} maxSize={100} className="relative">
          {/* VIDEO LAYOUT */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute text-white inset-0 bg-gradient-to-b from-gray-900/5 to-transparent"
          >
            {layout === "grid" ? <PaginatedGridLayout /> : <SpeakerLayout />}

            {/* PARTICIPANTS LIST OVERLAY */}
            <AnimatePresence>
              {showParticipants && (
                <motion.div 
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="absolute right-0 top-0 h-full w-[300px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-l border-violet-200/20"
                >
                  <CallParticipantsList onClose={() => setShowParticipants(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>


          {/* VIDEO CONTROLS */}

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 left-0 right-0"
          >
             <div className="flex flex-col items-center gap-4">
              <motion.div 
                className="flex items-center gap-2 flex-wrap justify-center px-4 backdrop-blur-sm bg-black/20 py-3 rounded-2xl mx-4"
                whileHover={{ scale: 1.02 }}
              >
                <CallControls onLeave={() => router.push("/")} />

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className="size-10 bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <LayoutListIcon className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLayout("grid")}>
                        Grid View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLayout("speaker")}>
                        Speaker View
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="outline"
                    size="icon"
                    className="size-10 bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                    onClick={() => setShowParticipants(!showParticipants)}
                  >
                    <UsersIcon className="size-4" />
                  </Button>

                  <EndCallButton />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-violet-500/20 hover:bg-violet-500/30 transition-colors" />

        <ResizablePanel defaultSize={65} minSize={25}>
        <CodeEditor />
        
        </ResizablePanel>
      </ResizablePanelGroup>
    </motion.div>
  );
}
export default MeetingRoom;
