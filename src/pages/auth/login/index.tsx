import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Helmet } from "react-helmet-async"
import { useSession } from "@/contexts/session/hook/use-session"
import { useToast } from "@/components/ui/use-toast"
import { LoaderCircle } from "lucide-react"

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .email({ message: "Este não é um e-mail válido." }),
  password: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .min(1, { message: "Este campo deve ser preenchido" }),
})

type ILoginFormData = z.infer<typeof loginSchema>

export function Login() {

  const { toast } = useToast()

  const { signIn } = useSession()

  const { mutate, isPending } = signIn

  const form = useForm<ILoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { isValid } = form.formState

  function onSubmit({ email, password }: ILoginFormData) {
    mutate(
      { email, password },
      {
        onError: () => {
          toast({
            variant: "destructive",
            title: "Ops! Algo Deu Errado",
            description: "Não conseguimos fazer login. Por favor, verifique suas credenciais e tente novamente",
          })
        },
      },
    );
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <Form  {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu e-mail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full flex gap-2" disabled={!isValid || isPending}>
                {!isPending && 'Salvar'}

                {isPending && <LoaderCircle size={18} className="animate-spin" />}
              </Button>
            </form>
          </Form >
        </div>
      </div>
    </>
  )
}
