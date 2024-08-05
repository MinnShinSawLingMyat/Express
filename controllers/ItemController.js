const { z } = require("zod");
const prisma = require("../utils/prismaClient");

const itemSchema = z.object({
    projectId: z.number().int().nonnegative(),
    link: z.string().url().optional(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
})

exports.create = async (req, res) => {
    const request = {
        ...req.body,
        image: req.file.filename
    };

    const validation = itemSchema.safeParse(request);

    if (!validation.success) {
        const err = {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Login.',
        };

        res.status(400).json(err);
    } 

    res.json(validation.data);
}