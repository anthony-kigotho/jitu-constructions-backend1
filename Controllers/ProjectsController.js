const {v4} = require('uuid')

const projects = []

class Project{
    constructor(id, project_name, project_location, project_description, startdate, enddate){
        this.id = id,
        this.project_name = project_name,
        this.project_location = project_location,
        this.project_description = project_description,
        this.startdate = startdate,
        this.enddate = enddate
    }
}

const createProject = async(req, res) => {
    try {
        const id = v4()

        const {project_name, project_description, project_location, startdate, enddate} = req.body

        const newProject = {id, project_name, project_description, project_location, startdate, enddate}

        projects.push(newProject)

        res.json({
            message: "Project created successfully",
            project: newProject
        })

    } catch (error) {
        return res.json(error)
    }
}

const getProjects = async(req, res) => {
    try {
        res.json({projects: projects})
        
    } catch (error) {
        return res.json(error)
    }
}

const getOneProject = async(req, res) => {
    try {
        const id = req.params.id

        const project = projects.filter(project => project.id == id);
        res.json({project})
    } catch (error) {
        return res.json(error)
    }
}

const updateProject = async(req, res) => {
    try {
        const id = req.params.id;

        const {project_name, project_description, project_location, startdate, enddate} = req.body;

        const project_index = projects.findIndex(project => project.id == id);

        if(project_index < 0){
            res.json('Project not found')
        }else{
            projects[project_index] = new Project(id,project_name, project_description, project_location, startdate, enddate)
        }

        res.json({
            message: 'project updated successfully',
            project: projects[project_index]
        })

    } catch (error) {
        return res.json(error)
    }
}

const deleteProject = async(req, res) => {
    try {
        const id = req.params.id;

        const projectIndex = projects.findIndex(project => project.id == id);

        if(projectIndex < 0) {
            res.json({Error: 'Project not found'})
        } else {
            projects.splice(projectIndex, 1)
            res.json({Message: 'Project deleted successfully'})
        }
        
    } catch (error) {
        res.json({Error: error})
    }
}

module.exports = {
    createProject,
    getProjects,
    getOneProject,
    updateProject,
    deleteProject
}