import path from "path";
const homeController = (req, res) => {
    res.render(path.join(process.cwd(), 'views', 'home.ejs'), {name: 'Swagat Satprem Jena'});
}

export { homeController };