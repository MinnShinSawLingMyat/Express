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
        projectId: Number(req.body.projectId),
        image    : req.file.filename
    };

    const validation = itemSchema.safeParse(request);

    if (!validation.success) {
        const err = {
            errors: validation.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Login.',
        };

        res.status(400).json(err);
    } 

    try {
        const { data } = validation;

        const item = await prisma.item.create({ data });

        res.json(item);
    } catch (e) {
        res.status(500).json({ error: e });
    }
    
}