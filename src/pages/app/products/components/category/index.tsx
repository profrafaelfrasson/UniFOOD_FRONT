import { useModal } from "@/pages/hooks/useModal"
import { ICategory } from "../../types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useMutation } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import { AxiosError } from "axios"
import { toast, useToast } from "@/components/ui/use-toast"

const categorySchema = z.object({
  name: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .min(1, { message: "Este campo deve ser preenchido" }),
  description: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .min(1, { message: "Este campo deve ser preenchido" }),
})

type ICategoryFormData = z.infer<typeof categorySchema>

export function Category() {

  const {
    isOpen: formModalAddIsOpen,
    actions: formModalAddActions,
    target: toTargetAddCategory,
  } = useModal<ICategory>()


  const form = useForm<ICategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      description: '',
      name: '',
    }
  })

  async function createCategoryRequest(params: ICategoryFormData) {

    const response = await api.post('/categories/register ', params)

    return response
  }

  const { mutate: craateCategoryMutation } = useMutation({
    mutationFn: createCategoryRequest,
    onError: () => {
      toast({
        variant: "destructive",
        title: "Algo deu errado, tente novamente.",

      })
    },
    onSuccess: (data) => {
      console.log(data)
    }
  })

  function onSubmit({ description, name }: ICategoryFormData) {

    const normalizedData = {
      name,
      description,
      id: crypto.randomUUID(),
      created_at: new Date(),
      updated_at: null,
      products: null,
    }

    craateCategoryMutation(normalizedData)
  }

  return (
    <>
      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>Categoria do Produto </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Label htmlFor="category">Categoria</Label>
            <Select>
              <SelectTrigger
                id="category"
                aria-label="Selecione"
              >
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <div className="w-full flex gap-2">
                  <SelectItem value="clothing" className="w-[85%]">
                    TESTE2222
                  </SelectItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="w-full flex gap-2">
                  <SelectItem value="electronics" className="w-[85%]">
                    Electronics
                  </SelectItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="w-full flex gap-2">
                  <SelectItem value="accessories" className="w-[85%]">
                    Accessories
                  </SelectItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="justify-center border-t p-2">
          <Button size="sm" variant="ghost" className="gap-1" onClick={() => formModalAddActions.open()}>
            <PlusCircle className="h-3.5 w-3.5" />
            Adicionar Categoria
          </Button>
        </CardFooter>
      </Card>


      <Dialog open={false} >
        <DialogContent className="sm:gap-8">
          <DialogHeader>
            <DialogTitle>Deseja Remover a Categoria?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="justify-between gap-2 sm:gap-3" >
            <Button type="submit" className="w-full">Confirmar</Button>

            <Button type="submit" variant="secondary" className="w-full">Cancelar</Button>
          </DialogFooter>
        </DialogContent >
      </Dialog >

      <Dialog open={formModalAddIsOpen} onOpenChange={formModalAddActions.toggle}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Categoria</DialogTitle>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="form-category">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome da categoria"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite a descrição da categoria"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form >

          <DialogFooter>
            <Button type="submit" form="form-category">Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}