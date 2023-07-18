"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";

export interface IChatProps {}

export const Chat: React.FC<IChatProps> = ({}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px] ">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                className="flex gap-3 text-slate-600 text-sm mb-4"
                key={message.id}
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/jarilton.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                )}
                <p className="loading-relxaded">
                  <span className="block font-bold text-slate-800">
                    {message.role === "user" ? "Usuário" : "AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full gap-2 flex" onSubmit={handleSubmit}>
          <Input
            placeholder="O que posso te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
};
