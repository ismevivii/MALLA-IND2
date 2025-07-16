const cursos = [
  const cursos = [
  { nombre: "Álgebra", codigo: "IND-111", creditos: 8, prerrequisitos: [], semestre: 1 },
  { nombre: "Cálculo i", codigo: "IND-112", creditos: 8, prerrequisitos: [], semestre: 1 },
  { nombre: "Comunicación en ingeniería", codigo: "IND-113", creditos: 5, prerrequisitos: [], semestre: 1 },
  { nombre: "Introducción a la Ingeniería", codigo: "IND-114", creditos: 6, prerrequisitos: [], semestre: 1 },
  { nombre: "Inglés l", codigo: "IFG-10028", creditos: 3, prerrequisitos: [], semestre: 1 },
  { nombre: "Álgebra Lineal", codigo: "IND-121", creditos: 8, prerrequisitos: ["Álgebra"], semestre: 2 },
  { nombre: "Cálculo ii", codigo: "IND-122", creditos: 8, prerrequisitos: ["Cálculo i"], semestre: 2 },
  { nombre: "Química", codigo: "IND-123", creditos: 5, prerrequisitos: [], semestre: 2 },
  { nombre: "Computación i", codigo: "IND-124", creditos: 6, prerrequisitos: [], semestre: 2 },
  { nombre: "Inglés li", codigo: "IFG-20028", creditos: 3, prerrequisitos: ["Inglés l"], semestre: 2 },
  { nombre: "Inglés lii", codigo: "IFG-3006", creditos: 3, prerrequisitos: ["Inglés li"], semestre: 3 },
  { nombre: "Probabilidades y estadística", codigo: "IND-213", creditos: 5, prerrequisitos: ["Álgebra Lineal"], semestre: 3 },
  { nombre: "Cálculo iii", codigo: "IND-211", creditos: 8, prerrequisitos: ["Cálculo ii"], semestre: 3 },
  { nombre: "Física i", codigo: "IND-212", creditos: 8, prerrequisitos: ["Cálculo i"], semestre: 3 },
  { nombre: "Computación ii", codigo: "IND-214", creditos: 6, prerrequisitos: ["Computación i"], semestre: 3 },
  { nombre: "Ecuaciones diferenciales", codigo: "IND-221", creditos: 8, prerrequisitos: ["Cálculo iii"], semestre: 4 },
  { nombre: "Análisis multivariado", codigo: "IND-223", creditos: 6, prerrequisitos: ["Probabilidades y estadística"], semestre: 4 },
  { nombre: "Módulo integrador Ciencias Básicas", codigo: "IND-224", creditos: 8, prerrequisitos: [], semestre: 4 },
  { nombre: "Física ii", codigo: "IND-222", creditos: 8, prerrequisitos: ["Física i"], semestre: 4 },
  { nombre: "Termodinámica", codigo: "IND-312", creditos: 8, prerrequisitos: ["Física ii"], semestre: 5 },
  { nombre: "Introducción a la Fe", codigo: "MFG-11428", creditos: 5, prerrequisitos: [], semestre: 5 },
  { nombre: "Diseño industrial y dibujo técnico", codigo: "IND-313", creditos: 6, prerrequisitos: [], semestre: 5 },
  { nombre: "Modelamiento matemático y estocástico", codigo: "IND-311", creditos: 6, prerrequisitos: ["Análisis multivariado"], semestre: 5 },
  { nombre: "Administración y RRHH", codigo: "IND-314", creditos: 5, prerrequisitos: [], semestre: 5 },
  { nombre: "Logística", codigo: "IND-322", creditos: 5, prerrequisitos: ["Modelamiento matemático y estocástico"], semestre: 6 },
  { nombre: "Electrónica industrial y automatización", codigo: "IND-321", creditos: 6, prerrequisitos: ["Diseño industrial y dibujo técnico"], semestre: 6 },
  { nombre: "Bases de datos", codigo: "IND-325", creditos: 4, prerrequisitos: ["Computación ii"], semestre: 6 },
  { nombre: "Economía", codigo: "IND-323", creditos: 5, prerrequisitos: ["Administración y RRHH"], semestre: 6 },
  { nombre: "Contabilidad y Finanzas", codigo: "IND-324", creditos: 5, prerrequisitos: [], semestre: 6 },
  { nombre: "Etica cristiana", codigo: "MFG-21628", creditos: 5, prerrequisitos: ["Introducción a la Fe"], semestre: 6 },
  { nombre: "Emprendimiento y Creación de empresas", codigo: "IND-414", creditos: 6, prerrequisitos: [], semestre: 7 },
  { nombre: "Investigación de Operaciones", codigo: "IND-411", creditos: 6, prerrequisitos: ["Modelamiento matemático y estocástico"], semestre: 7 },
  { nombre: "Procesos industriales", codigo: "IND-413", creditos: 6, prerrequisitos: ["Diseño industrial y dibujo técnico"], semestre: 7 },
  { nombre: "Ingenieria economica", codigo: "IND-413", creditos: 6, prerrequisitos: ["Economía"], semestre: 7 },
  { nombre: "Metodologia de la investigación", codigo: "IND-415", creditos: 6, prerrequisitos: [], semestre: 7 },
  { nombre: "Control de gestión", codigo: "IND-422", creditos: 4, prerrequisitos: ["Procesos industriales"], semestre: 8 },
  { nombre: "Módulo integrador Licenciatura (práctica)", codigo: "IND-425", creditos: 10, prerrequisitos: [], semestre: 8 },
  { nombre: "Gestión de operaciones", codigo: "IND-421", creditos: 4, prerrequisitos: ["Investigación de Operaciones"], semestre: 8 },
  { nombre: "Desarrollo personal y Liderazgo", codigo: "IND-423", creditos: 3, prerrequisitos: [], semestre: 8 },
  { nombre: "Creatividad y prototipaje de negocios", codigo: "IND-424", creditos: 4, prerrequisitos: [], semestre: 8 },
  { nombre: "Optimización", codigo: "IND-511", creditos: 5, prerrequisitos: ["Gestión de operaciones"], semestre: 9 },
  { nombre: "Propiedad intelectual", codigo: "IND-514", creditos: 5, prerrequisitos: [], semestre: 9 },
  { nombre: "Formulación y evaluación de proyectos", codigo: "IND-513", creditos: 5, prerrequisitos: ["Ingenieria economica"], semestre: 9 },
  { nombre: "Gestion y analisis de informacion", codigo: "IND-512", creditos: 5, prerrequisitos: ["Control de gestión"], semestre: 9 },
  { nombre: "Marketing estratégico", codigo: "IND-515", creditos: 5, prerrequisitos: [], semestre: 9 },
  { nombre: "Gestión de proyectos de i+d+i+e", codigo: "IND-524", creditos: 5, prerrequisitos: ["Propiedad intelectual"], semestre: 10 },
  { nombre: "planificación estrategica y gestion de negocios", codigo: "IND-523", creditos: 5, prerrequisitos: [], semestre: 10 },
  { nombre: "Inteligencia comp. y vig. tec.", codigo: "IND-525", creditos: 5, prerrequisitos: [], semestre: 10 },
  { nombre: "Gestión de calidad,producto y man.", codigo: "IND-521", creditos: 5, prerrequisitos: ["Procesos industriales"], semestre: 10 }
];

];


const cursoPorNombre = {};
cursos.forEach(curso => {
  cursoPorNombre[curso.nombre] = curso;
  curso.aprobado = false;
  curso.element = null;
});

function puedeDesbloquear(curso) {
  return curso.prerrequisitos.every(nombre => {
    const prereq = cursoPorNombre[nombre];
    return prereq && prereq.aprobado;
  });
}

function actualizarEstadoCursos() {
  cursos.forEach(curso => {
    if (!curso.aprobado && puedeDesbloquear(curso)) {
      curso.element.classList.remove('bloqueado');
    }
  });
}

function crearMalla() {
  const contenedor = document.getElementById('contenedor-malla');
  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.classList.add('curso');

    if (curso.prerrequisitos.length > 0) {
      div.classList.add('bloqueado');
    }

    div.innerHTML = `
      <strong>${curso.nombre}</strong><br/>
      Código: ${curso.codigo}<br/>
      Créditos: ${curso.creditos}<br/>
      ${curso.prerrequisitos.length ? `<small>Prerrequisitos: ${curso.prerrequisitos.join(", ")}</small>` : `<small>Sin prerrequisitos</small>`}
    `;

    div.addEventListener('click', () => {
      if (div.classList.contains('bloqueado') || curso.aprobado) return;
      curso.aprobado = true;
      div.classList.add('aprobado');
      actualizarEstadoCursos();
    });

    curso.element = div;
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', crearMalla);
