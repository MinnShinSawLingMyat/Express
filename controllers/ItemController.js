const Joi = require("joi");
const prisma = require("../utils/prismaClient");

const itemSchema = Joi.object({
    projectId: Joi.number().integer().required(),
    link: Joi.string().uri().optional(),
    title: Joi.string().required(),
    description: Joi.string().optional(),
    image: Joi.string().uri().required(),
});

exports.create = async (req, res) => {

    const request = {
        ...req.body,
        image: req.file.filename
    };

    const { error, value } = itemSchema.validate(request);

    if(error) {
        res
            .status(400)
            .json(error);
    } else {
        res.json(value);
    }
}