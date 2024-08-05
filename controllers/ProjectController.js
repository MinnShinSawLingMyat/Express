const prisma = require("../utils/prismaClient");

exports.index = async (req, res) => {
    try {
        const data = await prisma.project.findMany({
            include: {
                skills: { 
                    include: { skill: true }
                },
            },
            
        });

        const result = data.map((project) => {
            const skills = project.skills.map(skill => skill.skill);

            return { 
                ...project, 
                skills 
            }
        });

        res.json(result);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

exports.show = async (req, res) => {
    const { slug } = req.params;

    try {
        const data = await prisma.project.findFirst({
            where  : { slug },
            include: {
                items : true,
                skills: { 
                    include: { skill: true }
                },
            }
        });

        if(data) {
            
            res.json({
                ...data,
                skills: data.skills.map(skill => skill.skill)
            });

        } else {
            res.status(404).json(null);
        }
        

    } catch (e) {
        res.status(500).json({ error: e });
    }
}