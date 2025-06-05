import prisma from "../prisma";
import  { newUser } from "../types/user_types";
 "./"

export const getUserByEmail = (email: string) => {
    return prisma.user.findFirst({
        where: {
            email,
        },
    });
}
export const getUserById = (id: string) => {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}
export const CreateUser = async (data: newUser) => {
	console.log("data for new User:", data)
    return prisma.user.create({
        data
    });

};

