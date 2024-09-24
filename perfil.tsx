return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="text-2xl font-semibold hover:text-foreground">
                Configurações
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex  justify-end justify-self-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link
            href="/"
            className="text-foreground text-2xl font-semibold  transition-colors hover:text-foreground cursor-pointer"
          >
            <DoorOpen size={32} />
        </Link>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full gap-4 bg-muted/40 px-4 md:gap-8">
      <nav className="flex gap-4 flex-col px-8 border-r-2 border-[#97979799]  text-sm text-muted-foreground"
          >
            <div className="mx-auto grid mb-5 w-full max-w-6xl gap-2 pt-8">
             <h1 className="text-3xl font-semibold">Configuração</h1>
            </div>
            <Link href="#" className="font-semibold text-primary">
              Geral
            </Link>
            <Link href="#" className="font-semibold text-primary">
              Meus comentários
            </Link>
          </nav>
        <div className="flex w-full max-w-6xl items-start gap-6 pt-8">
          <div className="grid grid-cols-2 w-full gap-10 max-w-[900px]">
            <Card x-chunk="dashboard-04-chunk-1" className=" h-[280px] justify-between flex flex-col ">
              <CardHeader className="px-4 pb-0  flex flex-col">
                <CardTitle>Nome de usuário</CardTitle>
                <CardDescription>
                  Usado para indentificar o usuário
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form>
                  <Input placeholder="Nome de usuário" className="w-[350px] mx-2 mt-5" />
                </form>
              </CardContent>
              <br />
              <CardFooter className="border-t px-6 py-4">
                <Button className="hover:bg-[#07417f]">Salvar</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1" className=" h-[280px] justify-between flex flex-col ">
              <CardHeader className="px-4 pb-0  flex flex-col">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
             </Avatar>
              </CardHeader>
              <CardContent className="pt-0">
                <form>
                  <Input placeholder="Nome de usuário" className="w-[350px] mx-2 mt-5" />
                </form>
              </CardContent>
              <br />
              <CardFooter className="border-t px-6 py-4">
                <Button className="hover:bg-[#07417f]">Salvar</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1" className="h-[280px]  justify-between flex flex-col ">
              <CardHeader className="px-4 pb-0  flex flex-col">
                <CardTitle>Email do usuário</CardTitle>
                <CardDescription>
                  Usado para enviar notificações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Nome de usuário" className="w-[350px] mx-2 mt-5" />
                  <div className="flex items-center space-x-2 px-3 pt-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                     Permito alterar meus dados
                    </label>
                  </div>
                </form>
              </CardContent>
              <br />
              <CardFooter className="border-t px-6 py-4">
                <Button className="hover:bg-[#07417f]">Salvar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}