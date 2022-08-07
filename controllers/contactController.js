import path from 'path';
const contactController = (req, res) => {
    res.render(path.join(process.cwd(), 'views', 'contact.ejs'), {name: 'Swagat Satprem Jena'});
}

export { contactController };