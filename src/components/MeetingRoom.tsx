import {
  CallControls,
  CallingState,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutListIcon, LoaderIcon, UsersIcon, CodeIcon, XIcon } from "lucide-react";
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
  const [showCodeEditor, setShowCodeEditor] = useState(false);
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
        <ResizablePanel
          defaultSize={showCodeEditor ? 35 : 100}
          minSize={35}
          maxSize={100}
          className="relative bg-zinc-900 text-white"
        >
          <motion.div className="absolute inset-0">
          <div className="h-full bg-gradient-to-b from-violet-950/20 to-zinc-900/30">
              {layout === "grid" ? <PaginatedGridLayout /> : <SpeakerLayout />}
            </div>

            <AnimatePresence>
              {showParticipants && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                 className="absolute right-0 top-0 h-full w-[300px] bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/90 border-l border-violet-500/20"
                >
                  <CallParticipantsList onClose={() => setShowParticipants(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 left-0 right-0 z-50"
          >
            <div className="flex flex-col items-center gap-4 text-white">
              <motion.div
               className="flex items-center gap-2 flex-wrap justify-center px-4 backdrop-blur-md bg-zinc-900/80 py-3 rounded-2xl mx-4 border border-violet-500/20 shadow-lg shadow-violet-500/10"
               whileHover={{ scale: 1.02 }}
              >
                <CallControls onLeave={() => router.push("/")} />

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-10 bg-zinc-800/80 border-violet-500/30 hover:bg-white hover:border-violet-500/50 transition-colors text-violet-100"
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
                     className="size-10 bg-zinc-800/80 border-violet-500/30 hover:bg-white hover:border-violet-500/50 transition-colors text-violet-100"
                    onClick={() => setShowParticipants(!showParticipants)}
                  >
                    <UsersIcon className="size-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="size-10 bg-zinc-800/80 border-violet-500/30 hover:bg-white hover:border-violet-500/50 transition-colors text-violet-100"
                    onClick={() => setShowCodeEditor(!showCodeEditor)}
                  >
                    <CodeIcon className="size-4" />
                  </Button>

                  <EndCallButton />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </ResizablePanel>

        <AnimatePresence>
          {showCodeEditor && (
            <>
              <ResizableHandle withHandle className="bg-violet-500/30 hover:bg-violet-500/50 transition-colors" />
              <ResizablePanel defaultSize={65} minSize={35} className="bg-zinc-900/95">
              <div className="relative h-full border-l border-violet-500/20">
              <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-50 hover:bg-violet-500/20 text-violet-100"
                    onClick={() => setShowCodeEditor(false)}
                  >
                    <XIcon className="size-4" />
                  </Button>
                  <CodeEditor />
                </div>
              </ResizablePanel>
            </>
          )}
        </AnimatePresence>
      </ResizablePanelGroup>
    </motion.div>
  );
}

export default MeetingRoom;