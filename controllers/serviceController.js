import path from "path";
const serviceController = (req, res) => {
    res.render(path.join(process.cwd(), 'views', 'service.ejs'), {name: 'Swagat Satprem Jena', services: [{s_i: 'fa-solid fa-magnifying-glass-dollar', s_n: 'SEO', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-palette', s_n: 'Web Design', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-code', s_n: 'Web Development', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-brands fa-android', s_n: 'Android', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-brands fa-apple', s_n: 'iOS', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-rectangle-ad', s_n: 'Advertising', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-pencil', s_n: 'Logo Design', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-database', s_n: 'Hosting', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}, {s_i: 'fa-solid fa-headset', s_n: 'Support', s_d: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}]});
}

export { serviceController };