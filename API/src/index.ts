import express from 'express';
import cors from 'cors';
import EstudianteRouter from './routes/Estudiante.route'
import MateriaRouter from './routes/Materia.route'
import CarreraRouter from './routes/Carrera.route'
import CorreoRouter from './routes/Correo.route'
import MaterialRouter from './routes/Material.route'
import ProfesorRouter from './routes/Profesor.route'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/estudiante', EstudianteRouter,);
app.use('/materia', MateriaRouter,);
app.use('/carrera', CarreraRouter,);
app.use('/correo', CorreoRouter,);
app.use('/materiales', MaterialRouter,);
app.use('/profesor', ProfesorRouter,);

app.listen(PORT, () => {
    console.log(`Esuchando el puerto ${PORT}`);
});