import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  CardFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@cryptlex/ui";
function App() {
  return (
    <div className="flex  flex-col  h-screen items-center justify-center">
      <div className="flex gap-2">
        <Button variant={"destructive"}>Blue</Button>
        <Button variant={"outline"}>Hello</Button>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          non, dolore placeat tempore, facere possimus amet numquam doloremque
          maiores hic dolores architecto! Cumque vel assumenda repellat,
          aspernatur perspiciatis non quia.
          <Input />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default">Cancel</Button>
          <Button variant={"destructive"}>Deploy</Button>
        </CardFooter>
      </Card>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
