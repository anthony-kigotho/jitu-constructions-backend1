const {Router} = require('express')
const { createProject, getProjects, getOneProject, updateProject, deleteProject } = require('../Controllers/ProjectsController')

const projectRouter = Router()

projectRouter.post('/', createProject)
projectRouter.get('/', getProjects)
projectRouter.get('/:id', getOneProject)
projectRouter.put('/:id', updateProject)
projectRouter.delete('/:id', deleteProject)

module.exports = {
    projectRouter
}