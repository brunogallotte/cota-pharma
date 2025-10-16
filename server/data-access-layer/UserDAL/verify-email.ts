import { auth } from "@/auth"
import { prisma } from "@/prisma/prisma"

export const verifyEmailAction = async ({ token }: { token: string }) => {
    const session = await auth()
    
    if (!session?.user?.id) return { status: "error", client: { toast: { title: "Erro", description: "Usuário não autenticado" } } }

    const user = await prisma.user.findUnique({ where: { id: session?.user?.id }, select: { id: true, is_confirmed: true, userInfo: { select: { verification_email_token: true } } } })

    if (!user) return { status: "error", client: { toast: { title: "Erro", description: "Usuário não encontrado" } } }

    if (user.is_confirmed) return { status: "error", client: { toast: { title: "Erro", description: "Email já verificado" } } }

    if (user.userInfo[0].verification_email_token !== token) return { status: "error", client: { toast: { title: "Erro", description: "Token de verificação inválido" } } }

    await prisma.user.update({ where: { id: user.id }, data: { is_confirmed: true } })

    return { status: "success" }
}