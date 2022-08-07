import path from "path";
const skillController = (req, res) => {
    const skillsObj = {name: 'Swagat Satprem Jena', services: [{s_n: 'HTML/CSS', p: 100, c: 'progress-bar progress-bar-striped progress-bar-animated bg-danger'}, {s_n: 'JavaScript', p: 95, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'Java Programming', p: 90, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'Python', p: 95, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'SQL', p: 95, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'Django', p: 80, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'Dart', p: 45, c: 'progress-bar progress-bar-striped progress-bar-animated'}, {s_n: 'Julia Programming', p: 30, c: 'progress-bar progress-bar-striped progress-bar-animated'}]}
    res.render(path.join(process.cwd(), 'views', 'skill.ejs'), skillsObj);
}

export { skillController };