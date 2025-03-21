import { CODING_QUESTIONS, LANGUAGES } from "@/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertCircleIcon, BookIcon, LightbulbIcon, CheckCircleIcon, TimerIcon, BrainIcon } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Badge } from "./ui/badge";

function CodeEditor() {
  const [selectedQuestion, setSelectedQuestion] = useState(CODING_QUESTIONS[0]);
  const [language, setLanguage] = useState<"javascript" | "python" | "java" | "cpp">(LANGUAGES[0].id);
  const [code, setCode] = useState(selectedQuestion.starterCode[language]);

  const handleQuestionChange = (questionId: string) => {
    const question = CODING_QUESTIONS.find((q) => q.id === questionId)!;
    setSelectedQuestion(question);
    setCode(question.starterCode[language]);
  };

  const handleLanguageChange = (newLanguage: "javascript" | "python" | "java" | "cpp") => {
    setLanguage(newLanguage);
    setCode(selectedQuestion.starterCode[newLanguage]);
  };

  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[calc-100vh-4rem-1px]">
      {/* QUESTION SECTION */}
      <ResizablePanel>
        <ScrollArea className="h-full bg-background/95">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6"
          >
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Enhanced Header */}
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card p-4 rounded-xl shadow-sm border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {selectedQuestion.title}
                    </h2>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                     Medium
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TimerIcon className="h-4 w-4" />
                      <span>15 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BrainIcon className="h-4 w-4" />
                      <span>Success Rate: 65%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={selectedQuestion.id} onValueChange={handleQuestionChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      {CODING_QUESTIONS.map((q) => (
                        <SelectItem key={q.id} value={q.id}>
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-[150px]">
                      {/* SELECT VALUE */}
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${language}.png`}
                            alt={language}
                            className="w-5 h-5 object-contain"
                          />
                          {LANGUAGES.find((l) => l.id === language)?.name}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    {/* SELECT CONTENT */}
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>
                          <div className="flex items-center gap-2">
                            <img
                              src={`/${lang.id}.png`}
                              alt={lang.name}
                              className="w-5 h-5 object-contain"
                            />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              {/* Enhanced Problem Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="flex flex-row items-center gap-2 pb-3">
                    <BookIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Problem Description</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed pt-0">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <p className="whitespace-pre-line">{selectedQuestion.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Examples */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-l-4 border-l-yellow-500">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                    <CardTitle>Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-full w-full rounded-md border">
                      <div className="p-4 space-y-4">
                        {selectedQuestion.examples.map((example, index) => (
                          <div key={index} className="space-y-2">
                            <p className="font-medium text-sm">Example {index + 1}:</p>
                            <ScrollArea className="h-full w-full rounded-md">
                              <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                                <div>Input: {example.input}</div>
                                <div>Output: {example.output}</div>
                                {example.explanation && (
                                  <div className="pt-2 text-muted-foreground">
                                    Explanation: {example.explanation}
                                  </div>
                                )}
                              </pre>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          </div>
                        ))}
                      </div>
                      <ScrollBar />
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Constraints */}
              {selectedQuestion.constraints && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center gap-2">
                      <AlertCircleIcon className="h-5 w-5 text-blue-500" />
                      <CardTitle>Constraints</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1.5 text-sm marker:text-muted-foreground">
                        {selectedQuestion.constraints.map((constraint, index) => (
                          <li key={index} className="text-muted-foreground">
                            {constraint}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </motion.div>
          <ScrollBar />
        </ScrollArea>
      </ResizablePanel>

      <ResizableHandle withHandle className="bg-primary/10 hover:bg-primary/20 transition-colors" />

      {/* Enhanced Code Editor */}
      <ResizablePanel defaultSize={60} maxSize={100}>
        <motion.div 
          className="h-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
              wordWrap: "on",
              wrappingIndent: "indent",
              renderLineHighlight: "all",
              suggestOnTriggerCharacters: true,
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        </motion.div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default CodeEditor;
