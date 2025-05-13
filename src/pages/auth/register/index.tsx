import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

import { useCreateRegister } from './hooks/use-create-register'

const registerSchema = z.object({
  email: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .email({ message: 'Este não é um e-mail válido.' }),
  password: z
    .string({ required_error: 'Este campo deve ser preenchido' })
    .min(1, { message: 'Este campo deve ser preenchido' }),
  name: z.string({ required_error: 'Este campo deve ser preenchido' }),
})

type IRegisterFormData = z.infer<typeof registerSchema>

export function Register() {
  const { toast } = useToast()

  const { mutateAsync, isPending } = useCreateRegister()

  const form = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const { isValid } = form.formState

  function onSubmit(user: IRegisterFormData) {
    console.log(user)

    mutateAsync(
      { user },
      {
        onError: () => {
          toast({
            variant: 'destructive',
            title: 'Ops! Algo Deu Errado',
            description:
              'Não conseguimos fazer registro. Por favor, verifique suas credenciais e tente novamente',
          })
        },
      },
    )
  }

  return (
    <>
      <Helmet title="Registrar" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Registrar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu e-mail" {...field} />
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
              <Button
                type="submit"
                className="flex w-full gap-2"
                disabled={!isValid || isPending}
              >
                {!isPending && 'Salvar'}

                {isPending && (
                  <LoaderCircle size={18} className="animate-spin" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
