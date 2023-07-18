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

export interface IChatProps {}

export const Chat: React.FC<IChatProps> = ({}) => {
  return (
    <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
            <AvatarFallback>DF</AvatarFallback>
            <AvatarImage src="https://github.com/jarilton.png" />
          </Avatar>
          <p className="loading-relxaded">
            <span className="block font-bold text-slate-800">Humano:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            adipisci libero placeat earum. Minima impedit veritatis temporibus
            reprehenderit illo sapiente officia ipsam, aperiam, eum quasi
            nesciunt nihil saepe, illum quia.
          </p>
        </div>
        <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
            <AvatarFallback>DF</AvatarFallback>
            <AvatarImage src="https://github.com/rocketseat.png" />
          </Avatar>
          <p className="loading-relxaded">
            <span className="block font-bold text-slate-800">AI:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            adipisci libero placeat earum. Minima impedit veritatis temporibus
            reprehenderit illo sapiente officia ipsam, aperiam, eum quasi
            nesciunt nihil saepe, illum quia.
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Input placeholder="O posso te ajudar?" />
        <Button type="submit">Enviar</Button>
      </CardFooter>
    </Card>
  );
};
